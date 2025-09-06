export type DayOfWeek = '月' | '火' | '水' | '木' | '金' | '土' | '日'

export interface TimeSlot {
  id: string
  startTime: string
  endTime: string
  className: string
  instructor?: string
  targetAge?: string
  capacity?: number
  description?: string
}

export interface ClassInfo {
  id: string
  name: string
  description: string
  targetAge: string
  duration: string
  capacity: number
  benefits: string[]
  color: 'primary' | 'secondary' | 'accent-green' | 'accent-pink' | 'accent-purple'
}

export interface Schedule {
  dayOfWeek: DayOfWeek
  timeSlots: TimeSlot[]
}