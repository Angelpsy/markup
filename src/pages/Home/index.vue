<template>
    <Presentations
        :products="products"
        :isLoading="isLoading"
        :isError="isError"
        :errorMessage="errorMessage"
        :errorStatus="errorStatus"
        @fetch-products="fetchProducts"
    />
</template>

<script>
import Presentations from '@/pagesPresentations/Home'
import { ActionTypes as ActionTypesProducts } from '@/store/Products'

export default {
    name: 'Home',
    components: {
        Presentations
    },
    computed: {
        products () {
            return this.$store.state.Products.items
        },
        isLoading () {
            return this.$store.state.Products.isLoading
        },
        errorStatus () {
            return this.$store.state.Products.errorStatus
        },
        errorMessage () {
            return this.$store.state.Products.errorMessage
        },
        isError () {
            return this.errorStatus !== null
        }
    },
    methods: {
        fetchProducts () {
            this.$store.dispatch(`Products/${ActionTypesProducts.FETCH}`)
        }
    },
    mounted () {
        this.fetchProducts()
    }
}
</script>
