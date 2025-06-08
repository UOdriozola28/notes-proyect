import { useId, useState } from "react"
import type { EventFormType, NoteCommentLabel } from "../types"
import { LABELS } from '../consts';

export interface HeaderProps {
  saveNote: ({ comment, label }: NoteCommentLabel) => void
}

export default function Header({ saveNote }: HeaderProps) {

  const noteId = useId()
  const noteSelect = useId()
  const [note, setNote] = useState('')
  const [label, setLabel] = useState('')

  const handleSubmit = (e: EventFormType): void => {
    e.preventDefault()
    if (!note || !label) return
    const newNote = { comment: note, label } as NoteCommentLabel
    saveNote(newNote)
    setNote('')
    setLabel('')
  }

  return (
    <header>
      <h1>Cuaderno de notas</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor={noteId}>Nota (*)</label>
        <textarea name="note" id={noteId} placeholder="Escriba su nota aquí..." value={note} onChange={(e) => setNote(e.target.value)} />

        <label htmlFor={noteSelect}>Categoria(*)</label>
        <select value={label} name="label" id={noteSelect} onChange={(e) => setLabel(e.target.value)}>
          <option value="" disabled >Selecciona una categoria</option>
          {
            Object.entries(LABELS).map(([key, value]) => {
              return (
                <option key={key} value={value}>{value}</option>
              )
            })
          }
        </select>
        <button>Crear nueva nota</button>
      </form>

      <main>
        <span>Filtros</span>
      </main>

    </header>
  )
}