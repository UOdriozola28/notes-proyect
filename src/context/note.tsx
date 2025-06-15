import { createContext } from "react";
import type { NoteCommentLabel, NoteFuntion, Notes } from "../types";

interface Props {
  notes: Notes
  loading: boolean;
  handleSaveNotes: ({ comment, label }: NoteCommentLabel) => void;
  handleDeleteNote: ({ id, previusIdNote, handleSetNote }: NoteFuntion) => Promise<void>;
  handleShowNote: ({ id, previusIdNote, handleSetNote }: NoteFuntion) => () => void;
}

export const NoteContext = createContext<Props | null>(null);