<template lang="pug">
  b-container(fluid)
    h1 Product List
    img(v-if="loading", src="https://i.imgur.com/JfPpwOA.gif")
    b-row(v-else).text-center
      b-col(v-for="product in products",
        @hover="active=true",
        cols="12", sm="4", md="3",
        :key="product.id")
        b-card.mb-2
          p {{product.title}}
            b-badge(variant="light").ml-1  {{product.quantity}}
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
