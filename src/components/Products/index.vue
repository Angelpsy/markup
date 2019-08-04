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
    <div class="b-products__footer">
        <v-pagination
            v-model="page"
            :length="6"
        ></v-pagination>
    </div>
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
        }
    }
}
</script>

<style src="./index.css"></style>
