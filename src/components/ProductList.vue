<template lang="pug">
  div
    h1 Product List
    img(v-if="loading", src="https://i.imgur.com/JfPpwOA.gif")
    b-list-group(v-else).text-left
      b-list-group-item(v-for="product in products",
        @hover="active=true")
        span {{product.title}}:
        span.red  {{product.price | currency}}
        b-badge(variant="light").ml-1  {{product.quantity}}
        b-button(@click="addProductToCart(product)",
          :disabled="!productIsInStock(product)",
          variant="outline-secondary",
          size="sm").float-right Add to cart
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
