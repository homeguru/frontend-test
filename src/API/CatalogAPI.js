import CryptoJS from 'crypto-js'
import moment from 'moment'
import { marvelApi as config } from '../config'


class MarvelAPI {

  static getCharacters(origOptions = {}) {
    const defaultOptions = { page: 0, count: 20, name: '', nameStartsWith: '' }
    const options = Object.assign(defaultOptions, origOptions)

    const URI = '/v1/public/characters'
    const timeStamp = moment().unix()
    const hash = CryptoJS.MD5(timeStamp + config.privateKey + config.publicKey)
      .toString(CryptoJS.enc.Hex)

    const currentOffset = options.page === 1 ? 0 : (options.count * (options.page - 1))

    let params = `?apikey=${config.publicKey}&ts=${timeStamp}&hash=${hash}&limit=${options.count}&offset=${currentOffset}`

    if (options.name) {
      params = params.concat(`&name=${options.name}`)
    }
    if (options.nameStartsWith) {
      params = params.concat(`&nameStartsWith=${options.nameStartsWith}`)
    }
    const url = `${config.baseUrl}${URI}${params}`

    return fetch(url)
  }

  static getComicsByCharacter(characterId, offset = 0) {
    const URI = `/v1/public/characters/${characterId}/comics`
    const params = `?apikey=${config.publicKey}&limit=20&offset=${offset}`
    const url = `${config.baseUrl}${URI}${params}`

    return fetch(url)
  }
}

export default MarvelAPI
