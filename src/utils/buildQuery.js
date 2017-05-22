// LIBS
import URI from 'urijs'
// CONFIG
import { apiConfig } from '../../config/config'

export default function (query, token) {
  const { apiUrl, directory, dietApi } = apiConfig
  let url = URI(apiUrl)
    .directory(directory + dietApi)
    .query({
      token,
      query
    })

  return url.toString()
}
