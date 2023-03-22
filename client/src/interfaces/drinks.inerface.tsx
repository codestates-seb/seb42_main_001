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
  drinkId?: number | undefined;
  drinkName?: string;
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
  recommandDrinks: Drinks[];
  commentDrinks: {
    drinkCommentId?: number;
    commentId: number;
    memberId: number;
    displayName: string;
    commentContent: string;
    createAt: string;
  }[];
  tastingNote?: {
    fruity: number;
    orc: number;
    smoky: number;
    spicy: number;
    sweet: number;
  }[];
  snacks?: {
    snackKcal: string;
    snackInfo: string;
    snackImageUrl: string;
    snackName: string;
  }[];
}

export interface DrinksDetailProps {
  drinksDetail?: IDrinksDetail;
}
