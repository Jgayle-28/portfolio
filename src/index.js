import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import '@/styles/global-styles.css'
import App from './App'
import { GlobalProvider } from '@/context/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <GlobalProvider>
    <App />
  </GlobalProvider>
)
