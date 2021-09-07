import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import reportWebVitals from './reportWebVitals'

// estilo global
import { GlobalStyle } from './styles/global'

ReactDOM.render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
