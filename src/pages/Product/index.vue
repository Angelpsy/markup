<template>
    <Presentation
        :item="product"
        :is-loading="isLoading"
        :is-error="isError"
        :error-message="errorMessage"
        @fetchData="fetchData"
    />
</template>

<script>
import Presentation from "@/pagesPresentations/Product";
import { ActionTypes as ActionTypesProduct } from "@/store/Product";
export default {
    name: "Product",
    components: {
        Presentation
    },
    props: {
        id: {
            type: String,
            require: true
        }
    },
    computed: {
        product() {
            return this.$store.state.Product.item;
        },
        isLoading() {
            return this.$store.state.Product.isLoading;
        },
        errorStatus() {
            return this.$store.state.Product.errorStatus;
        },
        errorMessage() {
            return this.$store.state.Product.errorMessage;
        },
        isError() {
            return this.errorStatus !== null;
        },
    },
    methods: {
        async fetchData() {
            await this.$store.dispatch(
                `Product/${ActionTypesProduct.FETCH}`,
                this.id
            );
        }
    },
    mounted() {
        this.fetchData();
    }
};
</script>
