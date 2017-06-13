// UTILS
import request from '../../utils/request'
import buildQuery from '../../utils/buildQuery'

let xhr = new XMLHttpRequest()

export function getUserBasicInfo (token) {
  return new Promise((resolve, reject) => {
    const query = `
    {
      getUserInfo {
        _id
        email
        admin
        name
        surname
        nick
        media {
          profilePhoto
          thumbnail
        }
      }
    }`
    const url = buildQuery(query, token)

    xhr.abort()
    let params = {
      request: xhr,
      type: 'GET',
      url
    }

    request(params)
      .then(resolve)
      .catch(reject)
  })
}
