import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import Provider from 'provider'
import Connect from 'connect'


ReactDOM.render (
  <Provider>
    <App/>
  </Provider>,
  document.querySelector('#root')
)
