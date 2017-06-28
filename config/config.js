export const apiConfig = {
  // apiUrl: 'http://diet-api-161615.appspot.com/',
  apiUrl: 'http://localhost:8080/',
  directory: 'api/',
  dietApi: 'diet'
}

export const ingredientsApiConfig = {
  apiUrl: 'https://api.nal.usda.gov/',
  searchDirectory: 'ndb/search',
  nutrientsDirectory: 'ndb/nutrients/',
  apiKey: 'qEPoIp7alSxnI6fML8Mlu8isEvpJMTqUAOLD4ywS',
  dataSource: 'Standard Reference'
}

export const nutrientsCodes = {
  water: {
    id: 255,
    label: 'Water'
  },
  energy: {
    id: 208,
    label: 'Energy'
  },
  protein: {
    id: 203,
    label: 'Protein'
  },
  fats: {
    id: 204,
    label: 'Total lipid (fat)'
  },
  carbohydrate: {
    id: 205,
    label: 'Carbohydrate, by difference'
  },
  sugars: {
    id: 269,
    label: 'Sugars, total'
  }
}

export const localStorage = {
  itemName: 'diet-api'
}
