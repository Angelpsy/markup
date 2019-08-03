import { wrapper } from './wrapper'
import axios from 'axios'

const BASE_URL = process.env.VUE_APP_API_BASE_URL

const CancelToken = axios.CancelToken

const products = {
    getProducts (setCancelFetch) {
        return wrapper(BASE_URL, {
            cancelToken: new CancelToken(function executor (c) {
                setCancelFetch && setCancelFetch(c)
            })
        })
    },
    async getProductsByFilters (filters) {
        await wrapper(null, {
            params: filters
        })
    }
}

export default products
