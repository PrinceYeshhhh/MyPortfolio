export interface ContentItem {
  id: number;
  title: string;
  description: string;
  posterUrl: string;
  backdropUrl: string;
  titleLogo?: string;
  year: string;
  maturityRating: string;
  duration: string;
  genres: string[];
  match: number; // percentage match
}