import React from 'react'
import { Provider } from 'react-redux'
import AppRouter from './router/AppRouter'
import { store } from './redux/store/store' 
import './index.css'

const LandingApp = () => {
  return (
    <Provider store={ store }>
      <AppRouter />
    </Provider>
  )
}

export default LandingApp