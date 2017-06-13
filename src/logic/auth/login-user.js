// LIBS
import request from '../../utils/request'

// CONFIG
import { apiConfig } from '../../../config/config'

let xhr = new XMLHttpRequest()

export function logInUser (user) {
  return new Promise((resolve, reject) => {
    let { apiUrl, directory } = apiConfig
    directory += 'authenticate'

    const url = apiUrl + directory

    xhr.abort()
    let params = {
      request: xhr,
      type: 'POST',
      url,
      data: user,
      setHeaders: true
    }

    request(params)
      .then(resolve)
      .catch(reject)
  })
}
