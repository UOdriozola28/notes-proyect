import { useState } from "react";
import { initialNotes } from "../consts";
import type { Note, NoteCommentLabel, NoteId } from "../types";

export default function useNote() {

  const [notes, setNotes] = useState<Note[]>(initialNotes)

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

  const handleDeleteNote = ({ id }: NoteId): void => {
    const newNotes = notes.filter(note => note.id !== id)
    setNotes(newNotes)
  }

  return { notes, setNotes, handleSaveNotes, handleDeleteNote }
}