<template lang="pug">
  div
    h1 Shopping Cart
    p Total: {{total}}
    ul
      li(v-for="product in products")
        | {{product.title}} - {{product.price | currency}} - {{product.quantity}}
    button(@click="$store.dispatch('checkout')") Checkout
    p(v-if="$store.state.checkoutStatus") {{$store.state.checkoutStatus}}
</template>

<script>
  export default {
    name: 'ShoppingCart',
    computed: {
      products () {
        return this.$store.getters.cartProducts
      },
      total () {
        return this.$store.getters.cartTotal
      }
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
