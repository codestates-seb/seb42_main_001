import { IBoardData } from './boards.interface';
import { IDrinks } from './drinks.inerface';

export interface tag {
  tagId: number;
  tagName: string;
  tagInfo: string;
  board: Array<IBoardData>;
  drink: Array<IDrinks>;
}
