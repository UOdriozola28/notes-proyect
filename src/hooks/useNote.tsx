import { useContext } from "react";
import { NoteContext } from "../context/note";

export const useNote = () => {

  const context = useContext(NoteContext);

  if (!context) {
    throw new Error("useNote must be used within a NoteProvider");
  }

  const { notes, handleSaveNotes, handleDeleteNote, handleShowNote } = context;

  return { notes, handleSaveNotes, handleDeleteNote, handleShowNote }
}