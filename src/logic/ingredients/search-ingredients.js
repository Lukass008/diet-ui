import URI from 'urijs'
// CONFIG
import { ingredientsApiConfig } from '../../../config/config'

export default function (chunk) {
  if (!chunk || typeof chunk !== 'string' || !chunk.length) { return }

  const { apiUrl, searchDirectory, apiKey, dataSource } = ingredientsApiConfig
  const url = URI(apiUrl)
    .directory(searchDirectory)
    .query({
      api_key: apiKey,
      format: 'json',
      q: chunk,
      max: 0,
      offset: 0,
      ds: dataSource
    })

  return fetch(url).then((res) => res.json())
}