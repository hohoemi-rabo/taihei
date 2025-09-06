export interface Qualification {
  id: string
  name: string
  organization: string
  year: number
  icon?: string
}

export interface Experience {
  id: string
  period: string
  title: string
  description: string
  highlights?: string[]
}

export interface Achievement {
  id: string
  title: string
  description: string
  date: string
  imageUrl?: string
}

export interface InstructorProfile {
  id: string
  name: string
  title: string
  profileImage?: string
  introduction: string
  message: string
  experience: Experience[]
  qualifications: Qualification[]
  achievements: Achievement[]
  specialties: string[]
  motto: string
}