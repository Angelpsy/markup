import Vue from "vue";
import Vuex from "vuex";
import Products from "@/store/Products";
import Product from "@/store/Product";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        Products,
        Product
    }
});

export default store;
