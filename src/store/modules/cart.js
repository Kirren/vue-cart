export default {
  namespaced: true,
  state: {
    items: [],
    checkoutStatus: null
  },
  getters: {
    cartProducts (state, getters, rootState) {
      return state.items.map(cartItem => {
        const product = rootState.products.items.find(product => product.id === cartItem.id)
        return {
          id: product.id,
          title: product.title,
          price: product.price,
          quantity: cartItem.quantity
        }
      })
    },
    cartTotal (state, getters) {
      return getters.cartProducts.reduce((total, product) => total + product.price * product.quantity, 0)
    }
  },
  mutations: {
    pushProductToCart (state, productId) {
      state.items.push({
        id: productId,
        quantity: 1
      })
    },
    incrementItemQuantity (state, cartItem) {
      cartItem.quantity++
    },
    decrementItemQuantity (state, cartItem) {
      cartItem.quantity--
    },
    setCheckoutStatus (state, status) {
      state.checkoutStatus = status
    },
    emptyCart (state) {
      state.items = []
    }
  },
  actions: {
    addProductToCart({state, getters, commit, rootState, rootGetters}, product) {
      if (rootGetters['products/productIsInStock'](product) > 0) {
        const cartItem = state.items.find(item => item.id === product.id)
        if (!cartItem) {
          commit('pushProductToCart', product.id)
        } else {
          commit('incrementItemQuantity', cartItem)
        }
        commit('products/decrementProductQuantity', product, {root:true})
      }
    },
    incrementProductInCart({state, getters, commit, rootState, rootGetters}, product) {
      const cartItem = state.items.find(item => item.id === product.id)
      const stockItem = rootState.products.items.find(item => item.id === product.id)
      if (rootGetters['products/productIsInStock'](stockItem) > 0) {
        commit('incrementItemQuantity', cartItem)
        commit('products/decrementProductQuantity', stockItem, {root:true})
      }
    },
    decrementProductInCart({getters, state, commit, rootGetters, rootState}, product) {
      const cartItem = state.items.find(item => item.id === product.id)
      const stockItem = rootState.products.items.find(item => item.id === product.id)
      if (cartItem.quantity > 1) {
        commit('decrementItemQuantity', cartItem)
        commit('products/incrementProductQuantity', stockItem, {root: true})
      }
    },
    checkout({state, commit}) {
      setTimeout(() => {
        if (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1) {
          commit('emptyCart')
          commit('setCheckoutStatus', 'success')
        } else {
          commit('setCheckoutStatus', 'fail')
        }
      }, 100)
    }
  }
}
