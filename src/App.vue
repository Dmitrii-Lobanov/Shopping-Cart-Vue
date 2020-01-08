<template>
  <div id="app">
    <h1 class="header">Онлайн магазин</h1>
    <div class="container">
      <Products />
      <Cart />
    </div>
  </div>
</template>

<script>
import Products from "./components/Products.vue";
import Cart from "./components/Cart";

export default {
  name: "app",
  components: {
    Products,
    Cart
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.header {
  background-color: darkslategray;
  color: white;
  padding: 20px;
}
.container {
  display: grid;
  grid-template-columns: 3fr 1.5fr;
}
</style>
