import axios from "axios"
import md5 from "md5"

const publicKey = "5718ca2a36ff3bf26702da611953cccd"
const privateKey = "76fa9ca042d26eb4731815754ffe200d1b2f0d12"

const currentTime = +new Date()

const baseUrl = "https://gateway.marvel.com/v1/public/"
const params = `?ts=${currentTime}&apikey=${publicKey}&hash=${md5(currentTime + privateKey + publicKey)}`

export const getCharacters = (offset) => {
    return axios.get(`${baseUrl}characters${params}${offset ? `&limit=50&offset=${offset}` : ""}`).then(({data: { data }}) => data)
}

export const getCharData = (charId, type, offset) => {
    return axios.get(`${baseUrl}characters/${charId}/${type ? type : ""}${params}&orderBy=onsaleDate${offset ? `&offset=${offset}` : ""}`).then(({data: { data }}) => data)
}