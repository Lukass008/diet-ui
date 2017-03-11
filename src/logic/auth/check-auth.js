export function checkIfLogged (store) {
  return function (nextState, replaceState, next) {
    const auth = store.getState().get('auth')

    if (!auth.get('accessToken') || !auth.get('user')) {
      replaceState({
        pathname: '/login'
      })
      next()
    }
    next()
  }
}

export function checkIfNotLogged (store) {
  return function (nextState, replaceState, next) {
    const auth = store.getState().get('auth')

    if (auth.get('accessToken') || auth.get('user')) {
      replaceState({
        pathname: '/'
      })
      next()
    }
    next()
  }
}
