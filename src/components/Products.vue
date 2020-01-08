<template>
  <div class="products">
    <div v-for="product in products" :key="product.id" class="product">
      <img :src="require(`../data/${product.cover}`)" />
      <div>{{ product.name }}</div>
      <div>{{ product.price }} рублей</div>
      <button @click="showModal">
        Подробнее
      </button>

      <modal-desc
        v-if="isModalVisible"
        @close="closeModal"
        :name="product.name"
        :description="product.description"
        :price="product.price"
        :cover="product.cover"
      ></modal-desc>
      <button @click="addToCart(product)">Добавить в корзину</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import modalDesc from "./Modal";

export default {
  name: "Products",
  components: { modalDesc },
  data() {
    return {
      isModalVisible: false
    };
  },
  computed: mapState({
    products: state => state.products.all
  }),
  methods: {
    ...mapActions("cart", ["addToCart"]),
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  },
  created() {
    this.$store.dispatch("products/getAllProducts");
  }
};
</script>

<style scoped>
.products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.product {
  margin: 5%;
  padding: 5%;
  border: 1px solid lightgray;
  border-radius: 5%;
  box-shadow: 0px 5px 10px #444;
}
.product img {
  width: 100%;
  height: 200px;
}
</style>