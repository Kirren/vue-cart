import shop from '@/api/shop'

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
  actions: {
    fetchProducts({commit}) {
      return new Promise((resolve, reject) => {
        shop.getProducts(products => {
          commit('setProducts', products)
          resolve()
        })
      })
    }
  }
}
