import type { LABELS } from "./consts"

export type EventFormType = React.FormEvent<HTMLFormElement>

export interface Note {
  id: string
  comment: string
  label: typeof LABELS[keyof typeof LABELS]
}

export interface Notes { notes: Note[] }
export type NoteComment = Pick<Note, 'comment'>
export type NoteLabel = Pick<Note, 'label'>
export type NoteId = Pick<Note, 'id'>
export type NoteCommentLabel = Pick<Note, 'comment' | 'label'>
