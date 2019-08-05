<template>
    <ViewBase>
        <div class="p-home">
<!-- TODO: добавить форму с фильтрами -->
<!--            <div class="p-home__header">-->
<!--                <v-btn-->
<!--                    class="p-home__action"-->
<!--                    color="default"-->
<!--                    @click="$emit('fetch-products')"-->
<!--                >-->
<!--                    Получить данные-->
<!--                </v-btn>-->
<!--            </div>-->
            <div v-if="isLoading">Данные загружаются...</div>
            <div v-if="isError">
                Error: {{ errorMessage ? errorMessage : errorStatus }}
                <p v-if="isGhPage">
                    К сожалению на gh-page не работает api
                </p>
                <v-btn
                    v-else
                    class="p-home__action"
                    color="default"
                    @click="$emit('fetch-products')"
                >
                    Получить данные
                </v-btn>
            </div>
            <Products
                class="p-home__products"
                v-if="products && !isLoading && !isError"
                :items="products"
                :pageCurrent="pageCurrent"
                @change-page="$emit('change-page', $event)"
            />
        </div>
    </ViewBase>
</template>

<script>
import ViewBase from '@/views/Base'
import Products from '@/components/Products'

export default {
    name: 'HomePresentations',
    components: {
        ViewBase,
        Products
    },
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
        },
        pageCurrent: {
            type: Number,
            default: 1
        }
    },
    computed: {
        isGhPage () {
            return process.env.VUE_APP_IS_GH_PAGE
        }
    }
}
</script>

<style src="./index.css"></style>
