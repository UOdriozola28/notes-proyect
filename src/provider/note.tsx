import { useEffect, useState } from "react";
import type { NoteCommentLabel, NoteFuntion, Notes } from "../types";
import { NoteContext } from "../context/note";
import { supabase } from "../lib/supabase";

interface Props {
  children: React.ReactNode;
}

export function NoteProvider({ children }: Props) {

  const [notes, setNotes] = useState<Notes>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    async function fetchNotes() {
      setLoading(true)
      const { data, error } = await supabase.from("notes").select("*")

      if (error) {
        console.error("Error fetching notes:", error)
        return
      }

      setNotes(data)
      setLoading(false)
    }

    fetchNotes()
  }, [])

  const handleSaveNotes = async ({ comment, label }: NoteCommentLabel): Promise<void> => {

    const newNote = {
      id: crypto.randomUUID(),
      comment,
      label
    }

    const { error } = await supabase
      .from("notes")
      .insert([newNote])

    if (error) {
      console.error("Error saving note:", error)
      return
    }

    setNotes(prev => [
      ...prev,
      newNote
    ])
  }

  const handleShowNote = ({ id, previusIdNote, handleSetNote }: NoteFuntion) => () => {

    if (previusIdNote.current === id) return

    const note = notes.find(note => note.id === id)
    if (!note) return
    handleSetNote(note)
    previusIdNote.current = id
  }

  const handleDeleteNote = async ({ id, previusIdNote, handleSetNote }: NoteFuntion): Promise<void> => {

    const { error } = await supabase.from("notes")
      .delete()
      .eq("id", id)

    if (error) {
      console.error("Error deleting note:", error)
      return
    }

    if (previusIdNote.current === id) {
      handleSetNote({
        id: '',
        comment: '',
        label: ''
      })
    }
    setNotes(prev => prev.filter(item => item.id !== id))
  }

  return (
    <NoteContext.Provider value={{
      notes,
      loading,
      handleSaveNotes,
      handleDeleteNote,
      handleShowNote
    }}>
      {children}
    </NoteContext.Provider>
  )
}
