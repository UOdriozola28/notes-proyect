import type { Notes } from "../types"
import "./Notes.css"

export default function Notes({ notes }: Notes) {
  return (
    <ul className="notes-list">
      {notes.map(item => (
        <li key={item.id} className="note-card">
          <p className="note-comment">{item.comment}</p>
          <span className="note-label">{item.label}</span>
        </li>
      ))}
    </ul>
  )
}
