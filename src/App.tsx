import './App.css'
// import Footer from './components/Footer'
import Header from './components/Header'
import Notes from './components/Notes'
import { useNote } from './hooks/useNote'

function App() {
  const { notes, loading, handleSaveNotes, handleDeleteNote, handleShowNote } = useNote()

  return (
    <>
      <Header saveNote={handleSaveNotes} />
      {
        loading
          ? <p>Loading...</p>
          : <Notes notes={notes} deleteNote={handleDeleteNote} onShowNote={handleShowNote} />
      }
    </>
  )
}

export default App
