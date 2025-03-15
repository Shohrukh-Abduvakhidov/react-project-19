import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import InstaRouter from './instaRout'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <InstaRouter/>
  </StrictMode>,
)
