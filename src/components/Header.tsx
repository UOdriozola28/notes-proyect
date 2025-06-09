import { useEffect, useId, useRef, useState } from "react"
import type { EventFormType, NoteCommentLabel } from "../types"
import { LABELS } from '../consts';
import autoAnimate from '@formkit/auto-animate'

export interface HeaderProps {
  saveNote: ({ comment, label }: NoteCommentLabel) => void
}

export default function Header({ saveNote }: HeaderProps) {

  const noteId = useId()
  const noteSelect = useId()
  const [note, setNote] = useState('')
  const [label, setLabel] = useState('')

  // 
  const parent = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (parent.current) {
      autoAnimate(parent.current)
    }
  }, [parent])


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
      <h1>Note Book</h1>

      <div className="container-form" ref={parent}>
        <strong className="dropdown-label cursor-pointer" onClick={() => setShow(!show)}>Click me to {show ? 'close' : 'open'}!</strong>
        {
          show &&
          <form onSubmit={handleSubmit} className="form-note">
            <label htmlFor={noteId}>Note (*)</label>
            <textarea name="note" id={noteId} placeholder="Write note here..." value={note} onChange={(e) => setNote(e.target.value)} />

            <label htmlFor={noteSelect}>Category(*)</label>
            <select value={label} name="label" id={noteSelect} onChange={(e) => setLabel(e.target.value)}>
              <option value="" disabled >Select a category</option>
              {
                Object.entries(LABELS).map(([key, value]) => {
                  return (
                    <option key={key} value={value}>{value}</option>
                  )
                })
              }
            </select>
            <button>Create a new note</button>
          </form>
        }

      </div>

      {/* <main>
        <span>Filtros</span>
      </main> */}

    </header>
  )
}