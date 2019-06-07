export default function ({ $axios, redirect }) {
    $axios.defaults.baseURL = "http://localhost:8888/api/v1/kw"
}
