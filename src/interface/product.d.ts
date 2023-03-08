export interface IProduct {
  idx: string;
  name: string;
  mainImage: string;
  description: string;
  spaceCategory: string;
  price: string;
  maximumPurchases: string;
  registrationDate: string;
}

export interface IProductReducer {
  isLoading: boolean;
  error: string | null;
  products: IProduct[];
}
