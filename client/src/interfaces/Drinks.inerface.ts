export interface Drinks {
  drinkId: number;
  drinkName: string;
  priceRank: string;
  drinkAbv: number;
  drinkImageUrl: string;
  createAt: string | null;
  tags: {
    tagId: number;
    tagName: string;
  }[];
}

export interface Likes {
  drinkId: number;
  drinkName: string;
}

export interface DrinksProps {
  drinksData: Drinks;
  likesData: Likes[];
}

export interface DrinksTagsProps {
  drinksData: {
    tagId: number;
    tagName: string;
  };
}

// Detail
// Detail

export interface DrinksSnacksProps {
  drinksDetail: {
    snackKcal: string;
    snackInfo: string;
    snackImageUrl: string;
    snackName: string;
  };
}

export interface IDrinksDetail {
  drinkId: number;
  drinkName: string;
  priceRank: string;
  drinkAbv: number;
  drinkImageUrl: string;
  createAt: string | null;
  tags?: {
    tagId: number;
    tagName: string;
  }[];
  commentDrinks: {
    commentId: number;
    memberId: number;
    displayName: string;
    commentContent: string;
    createAt: string;
  }[];
  tastingNote: {
    citrus: number;
    sweet: number;
    smoky: number;
    herbal: number;
    tropical: number;
  }[];
  snacks?: {
    snackKcal: string;
    snackInfo: string;
    snackImageUrl: string;
    snackName: string;
  }[];
}

export interface DrinksDetailProps {
  drinksDetail: IDrinksDetail | undefined;
}
