<template lang="pug">
  div
    h1 Shopping Cart
    p Total: {{total}}
    ul
      li(v-for="product in products")
        | {{product.title}} - {{product.price | currency}} - {{product.quantity}}
    button(@click="checkout") Checkout
    p(v-if="checkoutStatus") {{checkoutStatus}}
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex'

  export default {
    name: 'ShoppingCart',
    computed: {
      ...mapGetters({
        products: 'cartProducts',
        total: 'cartTotal'
      }),
      ...mapState({
        checkoutStatus: 'checkoutStatus'
      })
    },
    methods: {
      ...mapActions(['checkout'])
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
