<template>
    <Presentations
        :products="products"
        :isLoading="isLoading"
        :isError="isError"
        :errorMessage="errorMessage"
        :errorStatus="errorStatus"
        :pageCurrent="pageCurrent"
        @fetch-products="fetchProducts"
        @change-page="changePage"
    />
</template>

<script>
import Presentations from "@/pagesPresentations/Home";
import { ActionTypes as ActionTypesProducts } from "@/store/Products";

export default {
    name: "Home",
    components: {
        Presentations
    },
    computed: {
        products() {
            return this.$store.state.Products.items;
        },
        isLoading() {
            return this.$store.state.Products.isLoading;
        },
        errorStatus() {
            return this.$store.state.Products.errorStatus;
        },
        errorMessage() {
            return this.$store.state.Products.errorMessage;
        },
        isError() {
            return this.errorStatus !== null;
        },
        pageCurrent() {
            const _queryPage = +(this.$route.query.page || 1);
            if (isNaN(_queryPage) || _queryPage < 1) {
                this.changePage(1);
            }
            return _queryPage;
        }
    },
    methods: {
        fetchProducts() {
            this.$store.dispatch(`Products/${ActionTypesProducts.FETCH}`);
        },
        changePage(page) {
            this.$router.push({
                name: "home",
                query: {
                    ...this.$route.query,
                    page: page !== 1 ? page : undefined
                }
            });
        }
    },
    mounted() {
        this.fetchProducts();
    }
};
</script>
