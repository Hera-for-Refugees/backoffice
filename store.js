import { action, observable } from 'mobx'
import { useStaticRendering } from 'mobx-react'
import fetch from './libs/fetch'

const isServer = typeof window === 'undefined'
useStaticRendering(isServer)

export class Store {
  @observable token = null
  @observable accountId = null
  @observable apps = []

  hydrate() {
    if (isServer) return
    this.token = localStorage.getItem('TOKEN')
    this.accountId = localStorage.getItem('ACCOUNT_ID')
      ? parseInt(localStorage.getItem('ACCOUNT_ID'))
      : null
  }

  @action onLogin(token) {
    this.token = token
    localStorage.setItem('TOKEN', token)
  }

  @action onAccountChange(id) {
    this.accountId = parseInt(id)
    localStorage.setItem('ACCOUNT_ID', id)
  }

  @action async fetchApps() {
    try {
      const { data } = await fetch.get('accounts/', {
        params: {
          limit: 999,
          order: [{ key: 'name', value: 'ASC' }],
          attributes: ['id', 'name']
        }
      })
      this.apps = data.rows
    } catch (error) {
      if (error.response) {
        throw error.response.data.message
      } else {
        throw error.message
      }
    }
  }
}
