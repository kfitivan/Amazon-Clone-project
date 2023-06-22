import axios from "axios"

const instance = axios.create({
    baseURL: '....'//Api (cloud function url)
})

export default instance