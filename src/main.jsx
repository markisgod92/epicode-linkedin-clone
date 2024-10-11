import 'bootstrap/dist/css/bootstrap.min.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'
import { MyProfileProvider } from './context/MyProfileContext.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <MyProfileProvider>
            <App />
        </MyProfileProvider>
    </StrictMode>
)
