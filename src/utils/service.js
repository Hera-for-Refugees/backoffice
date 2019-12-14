import axios from 'axios'

const Service = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    Authorization: localStorage.getItem('token')
  }
})

export default Service
