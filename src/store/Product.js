import Api from "@/api";
import axios from "axios";

export const ActionTypes = {
    FETCH: "FETCH"
};

let cancelFetch;

const setCancelFetch = fn => {
    cancelFetch = fn;
};

const Product = {
    namespaced: true,
    state: {
        isLoading: false,
        errorStatus: null,
        errorMessage: null,
        item: null
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
        set(state, item) {
            state.item = item;
        }
    },
    actions: {
        async [ActionTypes.FETCH]({ commit }, id) {
            cancelFetch && cancelFetch();
            commit("request");
            try {
                const resp = await Api.Product.getProductById(
                    id,
                    setCancelFetch
                );
                console.log(resp.data);
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
}

export default Product
