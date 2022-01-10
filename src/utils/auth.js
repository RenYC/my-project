import Cookies from 'js-cookie'

const Tokenkey = 'Admin-Token'

export function getToken () {
  return Cookies.get(Tokenkey)
}

export function setToken (token) {
  return Cookies.set(Tokenkey, token)
}

export function removeToken () {
  return Cookies.remove(Tokenkey)
}
