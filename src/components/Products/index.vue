<template>
    <v-container fluid class="b-products">
        <v-layout wrap>
            <v-flex
                class="b-products__item"
                v-for="item in itemsToShow"
                :key="item.id"
                md4
            >
                <Product
                    class="b-products__item-content"
                    :item="item"
                />
            </v-flex>
        </v-layout>
<!-- TODO: добавить пагинацию -->
    </v-container>
</template>

<script>
import Product from '@/components/Product'

const PER_PAGE = 15

export default {
    name: 'Products',
    components: {
        Product
    },
    props: {
        items: {
            type: Array,
            require: true
        },
        pageCurrent: {
            type: Number,
            default: 0
        }
    },
    computed: {
        itemsToShow () {
            return this.items.slice(
                (this.pageCurrent * PER_PAGE), ((this.pageCurrent + 1) * PER_PAGE)
            )
        }
    }
}
</script>

<style src="./index.css"></style>
