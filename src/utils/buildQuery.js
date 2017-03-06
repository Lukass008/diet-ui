import URI from 'urijs'

export default function (domain, directory, queryObj, queryString) {
  let url = URI(domain)
    .directory(directory)

  if (queryObj) {
    url = url.query(queryObj)
  }
  url = url.toString()
  typeof queryString === 'string' ? url += queryString : null

  return url
}

