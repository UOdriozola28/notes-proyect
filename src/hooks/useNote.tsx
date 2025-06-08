import { useState } from "react";
import { initialNotes } from "../consts";
import type { Note, NoteCommentLabel } from "../types";

export default function useNote() {

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

  const [notes, setNotes] = useState<Note[]>(initialNotes)

  return { notes, setNotes, handleSaveNotes }
}