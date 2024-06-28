export const setToken = (token) => {
  localStorage.setItem('TOKEN', token)
}
export const getToken = () => {
  return localStorage.getItem('TOKEN') || ''
}

export const addCart = (item) => {
  localStorage.setItem('cart', JSON.stringify(item))
}

export const getCart = () => {
  return JSON.parse(localStorage.getItem('cart')) || []
}