import { createRoot } from 'react-dom/client'
import '@fontsource-variable/geologica'
import './index.css'
import App from './App.tsx'
import { NoteProvider } from './provider/note.tsx'

createRoot(document.getElementById('root')!).render(
  <NoteProvider>
    <App />
  </NoteProvider>
)
