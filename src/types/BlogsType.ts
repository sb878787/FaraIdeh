export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string | null;
  content: string;
  contentType: string;
  published: boolean;
  category: string;
  author: string;
  featuredImage: string | null;
  readingTimeMinutes: number;
  labels: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface GetBlogsParams {
  limit?: number;
  skip?: number;
}
