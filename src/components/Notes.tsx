import { useEffect, useRef, useState } from "react"
import type { Note, NoteId, Notes } from "../types"
import { Trash2 } from "lucide-react"
import "./Notes.css"

interface Props {
  notes: Note[]
  deleteNote: ({ id }: NoteId) => void
}

export default function Notes({ notes, deleteNote }: Props) {

  const previusIdNote = useRef<string>(null)
  const [note, setNote] = useState({
    id: '',
    comment: '',
    label: ''
  })

  const handleClickNote = ({ id }: NoteId) => (e: React.MouseEvent<HTMLElement>): void => {
    const element = e.target as HTMLElement

    if (previusIdNote.current === id) return
    if (element.tagName === 'BUTTON') return

    const note = notes.find(note => note.id === id)
    if (!note) return
    setNote({
      id: note.id,
      comment: note.comment,
      label: note.label
    })
    previusIdNote.current = id
  }

  const handleDeleteNote = ({ id }: NoteId) => {
    if (previusIdNote.current === id) {
      setNote({
        id: '',
        comment: '',
        label: ''
      })
    }
    deleteNote({ id })
  }

  return (
    <main className="main-note">
      <ul className="notes-list">
        <h4>Notes</h4>
        {notes.map(item => (
          <li key={item.id} className="note-card" onClick={handleClickNote({ id: item.id })}>
            <p className="note-comment">{item.comment}</p>
            <span className="note-label">{item.label}</span> <br />
            <button className="delete-note" onClick={() => handleDeleteNote({ id: item.id })}>
              <Trash2 size={16} />
            </button>
          </li>
        ))}
      </ul>
      <div>
        <h3>My Note</h3>
        {
          note.label && <p className="category">Category: {note.label}</p>
        }
        <p className="comment">
          {
            note.comment
          }
        </p>
      </div>
    </main>

  )
}
