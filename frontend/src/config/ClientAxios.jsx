import axios from 'axios'

axios.interceptors.request.use((config) => {
    config.baseURL = `${import.meta.env.VITE_BACKEND_URL}/api`,
    config.withCredentials = true

    return config
})

const clientAxios = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`,
    withCredentials : true

})

export default clientAxios;