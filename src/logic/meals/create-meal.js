// UTILS
import request from '../../utils/request'
import buildQuery from '../../utils/buildQuery'

let xhr = new XMLHttpRequest()

export function createMeal (token, mealDetails) {
  return new Promise((resolve, reject) => {
    const query = `
    mutation {
      createMeal(
        id: 670
        name: "kotlet"
        type: "schabowy"
            description: "kotlet schabowy z ziemniakami"
        calories: 800
        nutrients: {
          carbohydrates: 90
            proteins: 60 
          fats: 25
        }
        recipe: {
          ingredients: [
              {
                 id: 1
                 name: "schab wieprzowy"
                unit: "g"
                amount: 200
              }
          ]
          spices: [
            {
              id: 3
              name: "sól"
            },
            {
              id: 4
              name:"pieprz"
            }
          ]
          preparation: [
            {
              stageId: 1
              stageName: ""
              description: "Uklep kotleta"
            },
            {
              stageId: 2
              stageName: ""
              description: "Usmaż Kotleta"
            },
            {
              stageId: 3
              stageName: ""
              description: "oskrob ziemniaki"
            },
            {
              stageId: 4
              stageName: ""
              description: "ugotuj ziemniaki"
            }
          ] 
        }
        media: {
          photoUrl: "http://lorempixel.com/400/200/food/"
        }
        ) {
        id
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
