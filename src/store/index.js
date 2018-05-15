import Vue from 'vue'
import Vuex from 'vuex'
import shop from '@/api/shop'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products:[],
    cart: []
  },
  getters: {
    // Get the products amount in the array
    productsCount () {},
    availableProducts (state, getters) {
      return state.products.filter(product => product.inventory > 0)
    }
  },
  actions: {
    // Make the call to the mock api to get the products array
    fetchProducts ({commit}) {
      return new Promise((resolve, reject) => {
        shop.getProducts(products => {
          commit('setProducts', products)
          resolve()
        })
      })
    },
    addProductToCart(context, product){
      // Find item in the cart
      if (product.inventory > 0) {
        const cartItem = context.state.cart.find(item => item.id === product.id)
        if (!cartItem) {
          context.commit('pushProductToCart', product.id)
        } else {
          context.commit('incrementItemQuantity', cartItem)
        }
        context.commit('decrementProductQuantity', product)
      }
    }
    /*,
    addToCart(context, product){
      if (product.inventory > 0) {
        context.commit('pushProductToCart', product)
      } else {

      }
    }*/
  },
  mutations: {
    // Update products state in the store
    setProducts (state, products) {
      state.products = products
    },
    pushProductToCart (state, productId) {
      state.cart.push({
        id: productId,
        quantity: 1
      })
    },
    incrementItemQuantity (state, cartItem) {
      cartItem.quantity++
    },
    decrementProductQuantity (state, product) {
      product.inventory--
    }
  }
})
