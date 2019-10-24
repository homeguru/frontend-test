import CryptoJS from 'crypto-js'
import moment from 'moment'
import { marvelApi as config } from './config'

class Service {

  static getComicsByCharacter(characterId, offset = 0) {
    const timeStamp = moment().unix()
    const hash = CryptoJS.MD5(timeStamp + config.privateKey + config.publicKey)
    const URI = `/v1/public/characters/${characterId}/comics`
    const params = `?apikey=${config.publicKey}&ts=${timeStamp}&hash=${hash}&limit=20&offset=${offset}`
    const url = `${config.baseUrl}${URI}${params}`

    return fetch(url)
  }
}

export default Service
