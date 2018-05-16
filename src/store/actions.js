import shop from '@/api/shop'

export default {
  // Make the call to the mock api to get the products array
  fetchProducts({commit}) {
    return new Promise((resolve, reject) => {
      shop.getProducts(products => {
        commit('setProducts', products)
        resolve()
      })
    })
  }
}
