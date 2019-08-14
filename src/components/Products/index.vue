<template>
    <v-container fluid class="b-products">
        <v-layout wrap>
            <v-flex
                class="b-products__item"
                v-for="item in itemsToShow"
                :key="item.id"
                md4
            >
                <ProductsItem
                    class="b-products__item-content"
                    :item="item"
                />
            </v-flex>
        </v-layout>
    <div class="b-products__footer">
        <v-pagination
            color="orange darken-1"
            dark
            v-model="page"
            :length="countPages"
            :total-visible="7"
        ></v-pagination>
    </div>
    </v-container>
</template>

<script>
import ProductsItem from '@/components/ProductsItem'

const PER_PAGE = 15

export default {
    name: 'Products',
    components: {
        ProductsItem
    },
    props: {
        items: {
            type: Array,
            require: true
        },
        pageCurrent: {
            type: Number,
            default: 1
        }
    },
    data () {
        return {
            page: this.pageCurrent
        }
    },
    watch: {
        page () {
            this.$emit('change-page', this.page)
        }
    },
    computed: {
        itemsToShow () {
            return this.items.slice(
                ((this.pageCurrent - 1) * PER_PAGE), (this.pageCurrent * PER_PAGE)
            )
        },
        countPages () {
            return Math.ceil(this.items.length / PER_PAGE)
        }
    }
}
</script>

<style src="./index.css"></style>
