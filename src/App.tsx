import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Notes from './components/Notes'
import useNote from './hooks/useNote'

function App() {
  const { notes, handleSaveNotes } = useNote()

  return (
    <>
      <Header saveNote={handleSaveNotes} />
      <Notes notes={notes} />
      <Footer />
    </>
  )
}

export default App
