import axios from "axios"
const BASE__URL = 'https://restcountries.com/v2/all'
export const GET__URL = () => {
    return axios.get(`${BASE__URL}`)
}
