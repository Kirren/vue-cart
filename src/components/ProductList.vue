<template lang="pug">
  div
    h1 Product List
    img(v-if="loading", src="https://i.imgur.com/JfPpwOA.gif")
    b-card-group(v-else, columns).text-center.mb-3
      b-card(v-for="product in products",
      :key="product.id",
      :title="product.title")
          p(v-if="product.quantity > 0")
            small {{product.quantity}} items left
          p(v-else).text-muted
            small
              i Product unavailable
              i &nbsp;
          p.text-danger
            strong {{product.price | currency}}
          b-button(@click="addProductToCart(product)",
          :disabled="!productIsInStock(product)",
          variant="outline-secondary",
          size="sm") Add to cart
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
a {
  color: #42b983;
}
</style>
