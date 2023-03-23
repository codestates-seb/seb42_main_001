import { BoardDataProps } from './boards.interface';
import { Drinks } from './drinks.inerface';

export interface tag {
  tagId: number;
  tagName: string;
  tagInfo: string;
  board: Array<BoardDataProps>;
  drink: Array<Drinks>;
}
