import React from 'react'
import ReactDOM from 'react-dom/client'
import AppWrapper from './App.jsx'
import ShopContextProvider from './contexts/ShopContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShopContextProvider>
      <AppWrapper />
    </ShopContextProvider>
  </React.StrictMode>
)
