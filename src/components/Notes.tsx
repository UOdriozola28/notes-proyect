import { useRef, useState } from "react"
import type { MouseEventHtmlElement, Note, NoteFuntion, Notes as NotesProp } from "../types"
import { Trash2 } from "lucide-react"
import "./Notes.css"

interface Props {
  notes: NotesProp
  onShowNote: ({ id, previusIdNote, handleSetNote }: NoteFuntion) => () => void
  deleteNote: ({ id, previusIdNote, handleSetNote }: NoteFuntion) => (e: MouseEventHtmlElement) => Promise<void>
}

export default function Notes({ notes, deleteNote, onShowNote }: Props) {

  const previusIdNote = useRef<string>(null)
  const [note, setNote] = useState({
    id: '',
    comment: '',
    label: ''
  })

  const handleSetNote = ({ id, comment, label }: Note) => {
    setNote({
      id: id,
      comment: comment,
      label: label
    })
  }

  const hasNotes = notes?.length > 0

  return (
    <main className="main-note">
      <ul className="notes-list">
        <h4>Notes</h4>
        {
          hasNotes ? notes.map(item => (
            <li key={item.id}
              className="note-card"
              onClick={onShowNote({ id: item.id, previusIdNote, handleSetNote })}
            >
              <p className="note-comment">{item.comment}</p>
              <span className="note-label">{item.label}</span> <br />
              <button className="delete-note"
                onClick={deleteNote({ id: item.id, previusIdNote, handleSetNote })}>
                <Trash2 size={16} />
              </button>
            </li>
          )) : 'No Notes found'
        }
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
