import './index.css'
import { StrictMode } from 'react'
import App from './App.tsx'
import { createRoot } from 'react-dom/client'
import UserContextProvider from './context/userContextProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </StrictMode>,
)
