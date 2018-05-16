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
  export default {
    name: 'ProductList',
    data () {
      return {
        loading: false
      }
    },
    computed: {
      products () {
        return this.$store.state.products
      },
      productIsInStock () {
        return this.$store.getters.productIsInStock
      }
    },
    methods: {
      addProductToCart (product) {
        this.$store.dispatch('addProductToCart', product)
      }
    },
    created () {
      this.loading = true
      this.$store.dispatch('fetchProducts')
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
