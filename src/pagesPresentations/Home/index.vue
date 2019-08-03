<template>
    <ViewBase>
        <div class="p-home">
            <div class="p-home__header">
                <v-btn
                    class="p-home__action"
                    color="default"
                    @click="$emit('fetch-products')"
                >
                    Получить данные
                </v-btn>
            </div>
            <div v-if="isLoading">Данные загружаются...</div>
            <div v-if="products && !isLoading">Данные: {{ products }} </div>
            <div v-if="isError">Error: {{ errorMessage ? errorMessage : errorStatus }} </div>
        </div>
    </ViewBase>
</template>

<script>
import ViewBase from '@/views/Base'
export default {
    name: 'HomePresentations',
    components: {
        ViewBase
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
        }
    }
}
</script>

<style src="./index.css"></style>
