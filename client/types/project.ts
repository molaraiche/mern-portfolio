import { imgProps } from "./type";

export interface projectType {
  _id?: string | number;
  title: string;
  brief: string;
  path: string;
  source?: string;
  live?: string;
  process?: string;
  solution?: string;
  stack?: string;
  category?: string;
  hot?: boolean;
  thumbnail?: imgProps;
  date?: string;
}
