// List
export interface IDrinks {
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

export interface ILikes {
  drinkId?: number | undefined;
  drinkName?: string;
}

export interface IDrinksProps {
  drinksData: IDrinks;
  likesData: ILikes[];
}

export interface IDrinksTagsProps {
  drinksData: {
    tagId: number;
    tagName: string;
  };
}

export interface ITags {
  tagId: number;
  tagName?: string;
}

// Detail
export interface IDrinksSnacksProps {
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
  recommandDrinks: IDrinks[];
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

export interface IDrinksDetailProps {
  drinksDetail?: IDrinksDetail;
}