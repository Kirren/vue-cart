import Vue from 'vue'
import VueResource from 'vue-resource'
import config from "../../../config";

Vue.use(VueResource)

export default {
  namespaced: true,
  state: {
    // All items in catalogue
    items: []
  },
  getters: {
    availableProducts (state, getters) {
      return state.items.filter(product => product.quantity > 0)
    },
    // Check if the product is left in stock
    productIsInStock () {
      return (product) => {
        return product.quantity > 0
      }
    }
  },
  mutations: {
    // Add items from api request to state
    setProducts (state, products) {
      state.items = products
    },
    // Decrement item quantity on removal from cart
    incrementProductQuantity (state, product) {
      product.quantity++
    },
    // Decrement item quantity on adding to cart
    decrementProductQuantity (state, product) {
      product.quantity--
    }
  },
  actions: {
    // Commit api call to get products
    fetchProducts({commit}) {
      Vue.http.get(config.dev.apiHost + config.dev.apiHostPrefix + '/items')
        .then(response => {
          commit('setProducts', response.data)
        })
    }
  }
}
