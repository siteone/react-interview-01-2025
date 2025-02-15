export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoCount?: number;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  courseId: string;
  open?: boolean;
  completed?: boolean;
}

export interface PaginationState {
  page: number;
  limit: number;
  total: number;
}

export type FilterValue = 'all' | 'completed' | 'not-completed'; 