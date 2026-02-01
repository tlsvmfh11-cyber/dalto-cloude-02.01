/*
  main.tsx — 앱의 진입점(Entry Point)
  ─────────────────────────────────────
  React 앱이 시작되는 곳입니다.
  index.html의 <div id="root">에 App 컴포넌트를 렌더링합니다.
*/

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import './styles/animations.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
