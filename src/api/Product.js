import { wrapper } from "./wrapper";
import axios from "axios";

const BASE_URL = process.env.VUE_APP_API_BASE_URL;

const CancelToken = axios.CancelToken;

const Product = {
    /**
     * @param {String} id
     * @param {Function} setCancelFetch
     * @returns {AxiosPromise}
     */
    getProductById(id, setCancelFetch) {
        return wrapper(`${BASE_URL}/${id}.json`, {
            cancelToken: new CancelToken(function executor(c) {
                setCancelFetch && setCancelFetch(c);
            })
        });
    }
};

export default Product;
