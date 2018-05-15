import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products:[]
  },
  getters: {
    // Get the products amount in the array
    productsCount(){}
  },
  actions: {
    // Make the call to the mock api to get the products array
    fetchProducts(){}
  },
  mutations: {
    // Update products state in the store
    setProducts(state, products){
      state.products = products
    }
  }
})
