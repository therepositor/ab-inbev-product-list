import { ChangeEvent } from "react";

export interface IProduct {
  id: string;
  title: string;
  difficulty: string;
  image: string;
  price?: number;
  addToCart?: (event: ChangeEvent<HTMLInputElement>) => void;
}
