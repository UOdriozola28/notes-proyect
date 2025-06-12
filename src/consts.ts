import type { Notes } from "./types"

export const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
export const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY

export const LABELS = {
  URGENT: 'Urgent',
  INSPIRATION: 'Inspiration',
  PERSONAL: 'Personal',
  CODING: 'Coding'
} as const

export const initialNotes = [
  {
    id: '1',
    comment: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus aliquam voluptate odio similique. Necessitatibus, consectetur tempora! Debitis delectus blanditiis quod eveniet sequi molestiae neque deleniti eum, voluptates dolor, velit maxime.',
    label: LABELS.CODING
  },
  {
    id: '2',
    comment: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus aliquam voluptate odio similique.',
    label: LABELS.INSPIRATION
  },
  {
    id: '3',
    comment: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus aliquam voluptate odio similique. Necessitatibus, consectetur tempora! Debitis delectus blanditiis quod eveniet sequi molestiae neque deleniti eum.',
    label: LABELS.PERSONAL
  },
  {
    id: '4',
    comment: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus aliquam voluptate odio similique. Necessitatibus, consectetur tempora! Debitis delectus blanditiis quod eveniet sequi molestiae neque deleniti eum, voluptates dolor, velit maxime.',
    label: LABELS.URGENT
  },
] as Notes