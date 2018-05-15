<template lang="pug">
  div
    h1 Product List
    img(v-if="loading", src="https://i.imgur.com/JfPpwOA.gif")
    ul(v-else)
      li(v-for="product in products") {{product.title}} - {{product.price}}
</template>

<script>
  export default {
    name: 'ProductList',
    data(){
      return {
        loading: false
      }
    },
    computed: {
      products(){
        return this.$store.getters.availableProducts
      }
    },
    created(){
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
