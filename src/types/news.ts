export type NewsCategory = 'important' | 'classroom' | 'event' | 'general'

export interface NewsPost {
  id: string
  title: string
  content: string
  excerpt: string
  category: NewsCategory
  publishedAt: string
  updatedAt: string
  isPublished: boolean
  imageUrl?: string
  tags?: string[]
}

export interface NewsFilter {
  category?: NewsCategory
  page?: number
  limit?: number
}

export interface PaginationInfo {
  currentPage: number
  totalPages: number
  totalItems: number
  hasNextPage: boolean
  hasPrevPage: boolean
}