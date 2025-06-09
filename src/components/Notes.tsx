import { useRef, useState } from "react"
import type { NoteId, Notes } from "../types"
import "./Notes.css"

export default function Notes({ notes }: Notes) {

  const previusIdNote = useRef<string>(null)
  const [note, setNote] = useState({
    comment: '',
    label: ''
  })

  const handleClickNote = ({ id }: NoteId): void => {

    if (previusIdNote.current === id) return

    const comment = notes.find(note => note.id === id)
    if (!comment) return
    setNote({
      comment: comment.comment,
      label: comment.label
    })
    previusIdNote.current = id
  }

  return (
    <main className="main-note">
      <ul className="notes-list">
        <h4>Notes</h4>
        {notes.map(item => (
          <li key={item.id} className="note-card" onClick={() => handleClickNote({ id: item.id })}>
            <p className="note-comment">{item.comment}</p>
            <span className="note-label">{item.label}</span>
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
