import Vue from 'vue'
import Vuex from 'vuex'
import Products from '@/store/Products'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        Products
    }
})

export default store
