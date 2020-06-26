import axios from 'axios'

const instance = axios.create({
    baseURL: "https://burger-way1.firebaseio.com/"
})

export default instance;