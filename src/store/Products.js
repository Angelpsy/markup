import Api from "@/api";
import axios from "axios";

export const ActionTypes = {
    "FETCH": "FETCH",
    "FETCH_BY_FILTERS": "FETCH_BY_FILTERS"
};

let cancelFetch;

const setCancelFetch = fn => {
    cancelFetch = fn;
};

const Products = {
    namespaced: true,
    state: {
        isLoading: false,
        errorStatus: null,
        errorMessage: null,
        items: null
    },
    mutations: {
        request(state) {
            state.isLoading = true;
            state.errorStatus = null;
            state.errorMessage = null;
        },
        requestSuccess(state) {
            state.isLoading = false;
        },
        requestFail(state, { errorStatus, errorMessage }) {
            state.isLoading = false;
            state.errorStatus = errorStatus;
            state.errorMessage = errorMessage;
        },
        set(state, items) {
            state.items = items;
        }
    },
    actions: {
        async [ActionTypes.FETCH]({ commit }) {
            cancelFetch && cancelFetch();
            commit("request");
            try {
                const resp = await Api.Products.getProducts(setCancelFetch);
                if (resp.data) {
                    commit("requestSuccess");
                    commit("set", resp.data);
                } else {
                    commit("requestFail", {
                        errorStatus: 0,
                        errorMessage:
                            "Неизвестная ошибка, повторите запрос позже"
                    });
                }
            } catch (e) {
                if (!axios.isCancel(e)) {
                    console.warn(e);
                    commit("requestFail", {
                        errorMessage: "Ошибка запроса, повторите попытку",
                        errorStatus: 0
                    });
                }
            }
        }
    }
};

export default Products;
