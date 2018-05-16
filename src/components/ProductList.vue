<template lang="pug">
  div
    h1 Product List
    img(v-if="loading", src="https://i.imgur.com/JfPpwOA.gif")
    ul(v-else)
      li(v-for="product in products")
        | {{product.title}} - {{product.price | currency}} - {{product.inventory}}
        button(@click="addProductToCart(product)"
          :disabled="!productIsInStock(product)") Add to cart
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex'

  export default {
    name: 'ProductList',
    data () {
      return {
        loading: false
      }
    },
    computed: {
      ...mapState('products', {
        products: state => state.items
      }),
      ...mapGetters('products', {
        productIsInStock: 'productIsInStock'
      })
    },
    methods: {
      ...mapActions({
        fetchProducts: 'products/fetchProducts',
        addProductToCart: 'cart/addProductToCart'
      })
    },
    created () {
      this.loading = true
      this.fetchProducts()
        .then(() => this.loading = false)
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
