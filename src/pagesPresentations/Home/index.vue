<template>
  <div class="p-home">
      <button @click="$emit('fetch-products')">Получить данные</button>
      <div v-if="isLoading">Загрузка...</div>
      <div v-if="products">Данные: {{ products }} </div>
      <div v-if="isError">Error: {{ errorMessage ? errorMessage : errorStatus }} </div>
  </div>
</template>

<script>
export default {
    name: 'HomePresentations',
    props: {
        products: {
            type: Array,
            require: true
        },
        isLoading: {
            type: Boolean,
            default: false
        },
        isError: {
            type: Boolean,
            default: false
        },
        errorMessage: {
            type: String,
            default: ''
        },
        errorStatus: {
            type: [Number, null],
            default: null
        }
    }
}
</script>
