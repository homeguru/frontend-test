import fetch from 'isomorphic-fetch'
import MD5 from "crypto-js/md5";
const API_KEY = 'ee32620aaad2be9e6b878aba8c2e5597';
const BASE_URL = 'https://gateway.marvel.com/v1/public'
const PUBLIC_KEY = API_KEY || '__MARVEL_API_PUBLIC_KEY__'
const PRIV_KEY = '45ebf39177b812dfbc1687ecf37ebcfd44c329cf';

const authParams = `apikey=${PUBLIC_KEY}`

function buscarRevistas(relativeURL) {
  
  var ts = new Date().getTime();
  var hash = MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();

  var url = BASE_URL + '/characters?ts=' + ts + '&apikey=' + API_KEY + '&hash=' + hash; 

  // return fetch('https://gateway.marvel.com/v1/public/characters?ts=1610627294964&apikey=ee32620aaad2be9e6b878aba8c2e5597&hash=93fb862be82b6e6afcd4913783c58316')
 return fetch(url)
    .then(res =>
      res.json()
      .then(console.timeEnd('total'))
    )
    .catch(error => console.error(error))
}

export function fetchObjects(resource, queryParams = {}) {
  queryParams.apikey = PUBLIC_KEY
	
  let result = buscarRevistas(resource).then(res => {
	  console.log(res);
    return {
      data: res.data
    }
  })

  return result;
}
