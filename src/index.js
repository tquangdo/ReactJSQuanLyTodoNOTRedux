import React from 'react'
import ReactDOM from 'react-dom'
import NgoaiCung from './components/new/NgoaiCung'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <NgoaiCung />
  , document.getElementById('dotq')
)

serviceWorker.unregister()
