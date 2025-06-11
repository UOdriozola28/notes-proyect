import { createContext } from "react";
import type { MouseEventHtmlElement, NoteCommentLabel, NoteFuntion, Notes } from "../types";

interface Props {
  notes: Notes
  handleSaveNotes: ({ comment, label }: NoteCommentLabel) => void;
  handleDeleteNote: ({ id, previusIdNote, handleSetNote }: NoteFuntion) => void;
  handleShowNote: ({ id, previusIdNote, handleSetNote }: NoteFuntion, e: MouseEventHtmlElement) => void;
}

export const NoteContext = createContext<Props | null>(null);