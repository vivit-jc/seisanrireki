export interface Pesticide {
  name: string;
  limit: number;
  day: number;
  dilution_ratio: number;
  target: string;
}
export interface Post {
  name: string;
  field_number: number;
  pesticide: string;
  timestamp: number;
}
