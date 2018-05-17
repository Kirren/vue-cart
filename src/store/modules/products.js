import Vue from 'vue'
import VueResource from 'vue-resource'
import config from "../../../config";

Vue.use(VueResource)

export default {
  namespaced: true,
  state: {
    items: []
  },
  getters: {
    availableProducts (state, getters) {
      return state.items.filter(product => product.quantity > 0)
    },
    productIsInStock () {
      return (product) => {
        return product.quantity > 0
      }
    }
  },
  mutations: {
    setProducts (state, products) {
      state.items = products
    },
    decrementProductQuantity (state, product) {
      product.quantity--
    }
  },
  //TODO: rewrite get call to be in shop.js
  actions: {
    fetchProducts({commit}) {
      Vue.http.get(config.dev.apiHost + config.dev.apiHostPrefix + '/items')
        .then(response => {
          commit('setProducts', response.data)
        })
    }
  }
}
