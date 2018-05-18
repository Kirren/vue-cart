<template lang="pug">
  div
    h1 Shopping Cart
    b-list-group.mb-3
      b-list-group-item(v-for="product in products", :key="product.id").text-left
        b-row
          b-col(cols="6") {{ product.title }}
          b-col(cols="3") {{ product.price | currency }}
          b-col(cols="3")
            span.float-left {{ product.quantity }}
            b-button-group(size="sm").float-right
              b-button(variant="success",
                @click="incrementProductInCart(product)",
                :disabled="!itemIsInStock(product.id)") +
              b-button(variant="danger",
                @click="decrementProductInCart(product)",
                :disabled="product.quantity < 2") -
    p
      span.float-left
        strong Total:
        |  {{ total | currency }}
      b-button(@click="checkout",
        variant="outline-secondary",
        size="sm").float-right Checkout
    p(v-if="checkoutStatus",
      :class="checkoutStatus === 'fail' ? 'text-danger' : 'text-success' ").text-capitalize {{ checkoutStatus }}
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex'

  export default {
    name: 'ShoppingCart',
    computed: {
      ...mapGetters({
        products: 'cart/cartProducts',
        total: 'cart/cartTotal',
        itemIsInStock: 'cart/itemIsInStock'
      }),
      ...mapState('cart', {
        checkoutStatus: state => state.checkoutStatus
      })
    },
    methods: {
      ...mapActions('cart', [
        'checkout',
        'incrementProductInCart',
        'decrementProductInCart'
      ])
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>
