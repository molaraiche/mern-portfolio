import { imgProps } from "./type";

export interface projectType {
  _id?: string | number;
  title: string;
  brief: string;
  tech?: imgProps[];
  path: string;
  source?: string;
  live?: string;
  thumbnail?: imgProps;
  description?: string;
  features?: string[];
  category?: string;
  hot?: boolean;
  logo?: imgProps;
}
