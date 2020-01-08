<template>
  <div>
    <h2>Корзина</h2>
    <p v-show="!products.length">Добавьте товары в корзину</p>
    <ul>
      <li v-for="product in products" :key="product.id" class="cart-item">
        {{ product.title }} - {{ product.price }}
        <button>Удалить</button>
      </li>
    </ul>
    <hr />
    <p>Итого: {{ total }} рублей</p>
    <button :disabled="!products.length" class="checkout-btn">
      Перейти к оплате
    </button>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "Cart",
  computed: {
    ...mapState({
      checkoutStatus: state => state.cart.checkoutStatus
    }),
    ...mapGetters("cart", {
      products: "cartProducts",
      total: "cartTotalPrice"
    })
  }
};
</script>

<style scoped>
.cart-item {
  list-style-type: none;
  padding-bottom: 5px;
}
.checkout-btn {
  width: 150px;
  height: 40px;
  border-radius: 5px;
  background-color: sienna;
  color: white;
  font-size: 1em;
}
</style>