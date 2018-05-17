<template lang="pug">
  div
    h1 Shopping Cart
    p Total: {{total | currency}}
    b-list-group.mb-3
      b-list-group-item(v-for="product in products", :key="product.id")
        | {{product.title}} - {{product.price | currency}} - {{product.quantity}}
    b-button(@click="checkout",
      variant="outline-secondary",
      size="sm") Checkout
    p(v-if="checkoutStatus") {{checkoutStatus}}
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex'

  export default {
    name: 'ShoppingCart',
    computed: {
      ...mapGetters('cart', {
        products: 'cartProducts',
        total: 'cartTotal'
      }),
      ...mapState('cart', {
        checkoutStatus: state => state.checkoutStatus
      })
    },
    methods: {
      ...mapActions('cart', ['checkout'])
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
