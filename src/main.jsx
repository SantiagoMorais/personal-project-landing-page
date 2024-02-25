import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
  }

  body {
    overflow-x: hidden;
  }

  a {
    text-decoration: none
  }

  a:link {
    color: none;
  }

  ul {
    list-style: none;
  }
`

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
)
