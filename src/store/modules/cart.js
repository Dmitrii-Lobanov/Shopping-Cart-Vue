import shop from '../../data/shop';

const state = {
  items: [],
  checkoutStatus: null
};

const getters = {
  cartProducts: (state, getters, rootState) => {
    return state.items.map(({id}) => {
      const product = rootState.products.all.find(product => product.id === id);
      return {
        title: product.name,
        price: product.price
      }
    })
  },
  cartTotalPrice: (state, getters) => {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price;
    }, 0)
  }
}

const actions = {
  checkout({commit, state}, products) {
    const savedCartItems = [...state.items]
    commit('setCheckoutStatus', null)
    commit('setCartItems', {items: []})
    shop.buyProducts(
      products,
      () => commit('setCheckoutStatus', 'successful'),
      () => {
        commit('setCheckoutStatus', 'failed')
        commit('setCartItems', {items: savedCartItems})
      }
    )
  },
  addToCart({ commit }, product) {
    commit('setCheckoutStatus', null)
    commit('pushProductToCart', {id: product.id})
  }
}

const mutations = {
  pushProductToCart(state, {id}) {
    state.items.push({id})
  },
  setCartItems(state, {items}) {
    state.items = items;
  },
  setCheckoutStatus(state, status) {
    state.checkoutStatus = status;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}