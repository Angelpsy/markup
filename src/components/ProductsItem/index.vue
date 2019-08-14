<template>
    <v-card
        class="b-products-item mx-auto"
    >
        <v-img
            class="b-products-item__hero"
            height="200px"
            :src="item.api_featured_image"
        >
            <v-card-title class="b-products-item__title">
                <router-link class="b-products-item__link" :to="{
                    name: 'product',
                    params: {
                        id: item.id
                    }
                }">
                    {{ item.name }}
                </router-link>
            </v-card-title>
        </v-img>
        <v-card-text class="b-products-item__main">
            <div class="b-products-item__desc text--primary">
                {{ item.description }}
            </div>
            <template v-if="item.product_colors && item.product_colors.length">
                <div class="b-products-item__block-title">Colors</div>
                <div class="b-products-item__colors" >
                    <span
                        class="b-products-item__color"
                        v-for="(color, index) in item.product_colors"
                        :style="{
                            'background-color': color.hex_value,
                            'color': getColorByBg(color.hex_value)
                            }"
                        :key="index"
                    >
                        {{ color.colour_name }}
                    </span>
                </div>
            </template>
        </v-card-text>
        <v-card-actions class="b-products-item__actions">
            <span class="b-products-item__link-wr">
                    <v-btn
                        tag="a"
                        :href="item.product_link"
                        class="b-products-item__link"
                        target="_blank"
                        text
                    >
                        More
                        <v-icon class="b-products-item__link-icon">mdi-open-in-new</v-icon>
                    </v-btn>
                </span>

            <span class="b-products-item__price">
                {{ item.price }} {{ item.price_sign }}
            </span>
             <v-btn @click="addToCart" color="orange lighten-1">Buy</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import tinycolor from 'tinycolor2'

export default {
    name: 'ProductsItem',
    props: {
        item: {
            type: Object,
            require: true
        }
    },
    methods: {
        addToCart () {
            alert(`${this.item.name} added to cart`)
        },
        getColorByBg (value) {
            const color = tinycolor(value)
            return color.isLight() ? '#000' : '#fff'
        }
    }
}
</script>

<style src="./index.css"></style>
