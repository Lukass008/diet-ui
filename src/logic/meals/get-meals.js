// UTILS
import request from '../../utils/request'
import buildQuery from '../../utils/buildQuery'

let xhr = new XMLHttpRequest()

export default function (token) {
  return new Promise((resolve, reject) => {
    const query = `
    {
      meals {
        id
        type
        name
        description
        calories
        nutrients {
          carbohydrates
          proteins
          fats
        }
        recipe {
          ingredients {
            id
            name
            unit
            amount
          }
          spices {
            id
          }
          preparation {
            stageId
            stageName
            description
          }
        }
        media {
          photoUrl
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
