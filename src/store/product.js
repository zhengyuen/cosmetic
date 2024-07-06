import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductStore = defineStore(
  'product',
  () => {
    const products = ref([])
    const setProducts = (newProducts) => {
      products.value = newProducts
    }
    const cart = ref([])
    const setCart = (products) => {
      cart.value = products
    }

    const orders = ref([])
    const setOrders = (orders) => {
      orders.value = orders
    }
    return {
      products,
      cart,
      orders,
      setProducts,
      setCart,
      setOrders
    }
  },
  {
    persist: true
  }
)