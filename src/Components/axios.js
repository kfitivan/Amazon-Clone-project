import axios from "axios"

const instance = axios.create({
    baseURL: 'http://127.0.0.1:5001/eclone-ee9d6/us-central1/api'//Api (cloud function url)
})

export default instance