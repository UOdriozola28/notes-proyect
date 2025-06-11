import type { LABELS } from "./consts"

export type EventFormType = React.FormEvent<HTMLFormElement>

export interface Note {
  id: string
  comment: string
  label: typeof LABELS[keyof typeof LABELS] | ''
}

export type Notes = Note[]
export type NoteComment = Pick<Note, 'comment'>
export type NoteLabel = Pick<Note, 'label'>
export type NoteCommentLabel = Pick<Note, 'comment' | 'label'>
export type NoteId = Note['id']

export type MouseEventHtmlElement = React.MouseEvent<HTMLElement>

export interface NoteFuntion {
  id: NoteId
  previusIdNote: React.MutableRefObject<string | null>
  handleSetNote: (note: Note) => void
}