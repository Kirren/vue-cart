<template lang="pug">
  div
    h1 Product List
    ul
      li(v-for="product in products") {{product.title}} - {{product.price}}
</template>

<script>
  import shop from '@/api/shop'
  import store from '@/store/index'

  export default {
    name: 'ProductList',
    computed: {
      products() {
        return store.state.products
      }
    },
    created (){
      shop.getProducts(products => {
        // this.products = products
        store.commit('setProducts', products)
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}
</style>
