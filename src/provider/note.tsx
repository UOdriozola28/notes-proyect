import { useState } from "react";
import type { MouseEventHtmlElement, NoteCommentLabel, NoteFuntion, Notes } from "../types";
import { initialNotes } from "../consts";
import { NoteContext } from "../context/note";

interface Props {
  children: React.ReactNode;
}

export function NoteProvider({ children }: Props) {

  const [notes, setNotes] = useState<Notes>(initialNotes)

  const handleSaveNotes = ({ comment, label }: NoteCommentLabel) => {
    setNotes(prev => [
      ...prev,
      {
        id: crypto.randomUUID(),
        comment,
        label
      }
    ])
  }

  const handleShowNote = ({ id, previusIdNote, handleSetNote }: NoteFuntion) => (e: MouseEventHtmlElement) => {
    const element = e.target as HTMLElement

    if (previusIdNote.current === id) return
    if (element.tagName === 'BUTTON') return

    const note = notes.find(note => note.id === id)
    if (!note) return
    handleSetNote(note)
    previusIdNote.current = id
  }

  const handleDeleteNote = ({ id, previusIdNote, handleSetNote }: NoteFuntion) => (): void => {

    if (previusIdNote.current === id) {
      handleSetNote({
        id: '',
        comment: '',
        label: ''
      })
    }

    const newNotes = notes.filter(note => note.id !== id)
    setNotes(newNotes)
  }

  return (
    <NoteContext.Provider value={{
      notes,
      handleSaveNotes,
      handleDeleteNote,
      handleShowNote
    }}>
      {children}
    </NoteContext.Provider>
  )
}
