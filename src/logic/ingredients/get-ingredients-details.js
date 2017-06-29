import URI from 'urijs'
// CONFIG
import { ingredientsApiConfig, nutrientsCodes } from '../../../config/config'

export default function (ndbno) {
  if (!ndbno || typeof ndbno !== 'string' || !ndbno.length) { return }

  const { apiUrl, nutrientsDirectory, apiKey } = ingredientsApiConfig
  const url = URI(apiUrl)
    .directory(nutrientsDirectory)
    .query({
      api_key: apiKey,
      format: 'json',
      ndbno,
      nutrients: [
        nutrientsCodes.protein.id,
        nutrientsCodes.carbohydrate.id,
        nutrientsCodes.fats.id,
        nutrientsCodes.energy.id

      ]
    })

  return fetch(url).then((res) => res.json())
}
