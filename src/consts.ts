
export const LABELS = {
  URGENT: 'Urgente',
  INSPIRATION: 'Inspiración',
  PERSONAL: 'Personal',
  CODING: 'Programación'
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
]