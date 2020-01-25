import axios from 'axios'
import Router from 'next/router'

const fetch = axios.create({
  // TODO:FE: daha sonra env dosyasından okunacak
  baseURL: 'http://192.168.86.248:3000/v1'
})

fetch.interceptors.request.use(
  function(config) {
    const token = localStorage.getItem('TOKEN')
    if (token) {
      config.headers.authorization = token
    }
    return config
  },
  function(error) {
    return Promise.reject(error)
  }
)

fetch.interceptors.response.use(
  function(response) {
    return response
  },
  function(error) {
    const { status } = error.response
    // 401 = token geçerli değil
    // 417 = header içinde token yok
    // TODO:FE auth ekranlarınd burası devre dışı kalması gerekiyor
    if (status === 401 || status === 417) {
      // localStorage.clear()
      // Router.push('/login')
    }
    return Promise.reject(error)
  }
)

export default fetch
