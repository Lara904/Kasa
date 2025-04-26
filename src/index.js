import React, { useEffect, useContext } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ThemeProvider, ThemeContext } from './context/ThemeContext'

function RootWithTheme() {
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  return <App />
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <RootWithTheme />
    </ThemeProvider>
  </React.StrictMode>
)

reportWebVitals()