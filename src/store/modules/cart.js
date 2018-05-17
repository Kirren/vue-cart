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
      // Check remaining amount of items in stock:

      // if at least 1 left - ...
      if (rootGetters['products/productIsInStock'](product) > 0) {
        // find passed product in cart:
        const cartItem = state.items.find(item => item.id === product.id)
        // if item wasn't previously added to cart - ...
        if (!cartItem) {
          // ... add it ...
          commit('pushProductToCart', product.id)
        } else {
          // ... or increase amount;
          commit('incrementItemQuantity', cartItem)
        }
        // then decrease products quantity in stock.
        commit('products/decrementProductQuantity', product, {root:true})
      }
    },
    incrementProductInCart({getters, state, commit, rootGetters, rootState}, cartItem) {
      alert(rootGetters['products/productIsInStock'](cartItem))
      if (rootGetters['products/productIsInStock'](cartItem) > 0) {
        commit('incrementItemQuantity', cartItem)
        commit('products/decrementProductQuantity', cartItem, {root: true})
      }
    },
    decrementProductInCart({getters, state, commit, rootGetters, rootState}, cartItem) {
      alert(state.items[cartItem].quantity)
      if (state.items[cartItem].quantity > 0) {
        commit('decrementItemQuantity', cartItem)
        commit('products/incrementProductQuantity', cartItem, {root: true})
      }
    },
    checkout({state, commit}) {
      setTimeout(() => {
        // simulate random checkout failure.
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
