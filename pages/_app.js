import App from 'next/app'
import React from 'react'
import { Store } from '../store'
import { Provider } from 'mobx-react'
import Seo from '../components/seo'

import 'antd/dist/antd.min.css'
import '../styles/override.css'
import '../styles/main.css'

class MyMobxApp extends App {
  state = {
    store: new Store()
  }

  static getInitialProps(appContext) {
    return App.getInitialProps(appContext)
  }

  static getDerivedStateFromProps(props, state) {
    state.store.hydrate()
    return state
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Provider store={this.state.store}>
        <Seo />
        <Component {...pageProps} />
      </Provider>
    )
  }
}

export default MyMobxApp
