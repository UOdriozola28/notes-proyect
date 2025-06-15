import { createContext } from "react";
import type { MouseEventHtmlElement, NoteCommentLabel, NoteFuntion, Notes } from "../types";

interface Props {
  notes: Notes
  loading: boolean;
  handleSaveNotes: ({ comment, label }: NoteCommentLabel) => void;
  handleDeleteNote: ({ id, previusIdNote, handleSetNote }: NoteFuntion) => (e: MouseEventHtmlElement) => Promise<void>;
  handleShowNote: ({ id, previusIdNote, handleSetNote }: NoteFuntion) => () => void;
}

export const NoteContext = createContext<Props | null>(null);