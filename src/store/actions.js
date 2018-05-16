import shop from '@/api/shop'

export default {
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
}
