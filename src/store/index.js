import Vue from 'vue'
import Vuex from 'vuex'
import shop from '@/api/shop'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products:[]
  },
  getters: {
    // Get the products amount in the array
    productsCount(){},
    availableProducts(state, getters){
      return state.products.filter(product => product.inventory > 0)
    }
  },
  actions: {
    // Make the call to the mock api to get the products array
    fetchProducts({commit}){
      return new Promise((resolve, reject) => {
        shop.getProducts(products => {
          commit('setProducts', products)
          resolve()
        })
      })
    }/*,
    addToCart(context, product){
      if (product.inventory > 0) {
        context.commit('pushProductToCart', product)
      } else {

      }
    }*/
  },
  mutations: {
    // Update products state in the store
    setProducts(state, products){
      state.products = products
    }
  }
})
