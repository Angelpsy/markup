<template>
    <ViewBase class="p-product">
        <div class="p-product__main">
            <Product
                v-if="item && !isError"
                class="p-product__card"
                :item="item"
            />

            <v-overlay :value="isLoading" class="p-product__loader">
                <v-progress-circular indeterminate size="64"></v-progress-circular>
            </v-overlay>

            <v-alert
                v-if="isError"
                type="error"
                prominent
                class="p-product__error"
            >
                <v-row align="center">
                    <v-col class="grow">{{ errorMessage }}</v-col>
                    <v-col class="shrink">
                        <v-btn
                            class="p-product__fetch-data"
                            @click="$emit('fetchData')"
                        >Повторить запрос</v-btn>
                    </v-col>
                </v-row>
            </v-alert>
        </div>
    </ViewBase>
</template>

<script>
import ViewBase from "@/views/Base";
import Product from "@/components/Product";

export default {
    name: "ProductPresentation",
    components: {
        ViewBase,
        Product,
    },
    props: {
        item: {
            type: [Object, null],
            require: true,
        },
        isLoading: {
            type: Boolean,
            default: false,
        },
        isError: {
            type: Boolean,
            default: false,
        },
        errorMessage: {
            type: String,
            default: "",
        },
    },
};
</script>

<style src="./index.css"></style>
