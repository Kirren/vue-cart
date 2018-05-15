import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

new Vuex.Store({
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
    // Update products in the store
    setProducts(){}
  }
})
