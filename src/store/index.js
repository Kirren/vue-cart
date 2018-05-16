import Vue from 'vue'
import Vuex from 'vuex'
import shop from '@/api/shop'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products:[],
    cart: [],
    checkoutStatus: null
  },
  getters: {
    // Get dynamic values
    availableProducts (state, getters) {
      return state.products.filter(product => product.inventory > 0)
    },
    cartProducts (state) {
      return state.cart.map(cartItem => {
        const product = state.products.find(product => product.id === cartItem.id)
        return {
          title: product.title,
          price: product.price,
          quantity: cartItem.quantity
        }
      })
    },
    cartTotal (state, getters) {
      /*
      let total = 0
      getters.cartProducts.forEach(product => {
        total += product.price * product.quantity
      })
      return total
      */
      return getters.cartProducts.reduce((total, product) => total + product.price * product.quantity, 0)
    },
    productIsInStock () {
      return (product) => {
        return product.inventory > 0
      }
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
    addProductToCart ({state, getters, commit}, product){
      // Find item in the cart
      if (getters.productIsInStock(product) > 0) {
        const cartItem = state.cart.find(item => item.id === product.id)
        if (!cartItem) {
          commit('pushProductToCart', product.id)
        } else {
          commit('incrementItemQuantity', cartItem)
        }
        commit('decrementProductQuantity', product)
      }
    },
    checkout ({state, commit}) {
      shop.buyProducts(
        state.cart,
        () => {
          commit('emptyCart')
          commit('setCheckoutStatus', 'success')
        },
        () => {
          commit('setCheckoutStatus', 'fail')
        }
      )
    }
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
    },
    setCheckoutStatus (state, status) {
      state.checkoutStatus = status
    },
    emptyCart (state) {
      state.cart = []
    }
  }
})
