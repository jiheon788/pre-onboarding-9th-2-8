export interface IProduct {
  idx: number;
  name: string;
  mainImage: string;
  price: number;
  spaceCategory: string;
  description: string;
  maximumPurchases: number;
  registrationDate: string;
}

export interface IRouterMeta {
  name?: string;
  path: string;
  isShow: boolean;
}

export type RouterMetaType = {
  [key: string]: IRouterMeta;
};

export interface IRouter {
  Component: React.LazyExoticComponent<React.ComponentType<any>>;
  props: IRouterMeta;
}

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;

export interface ICartItem {
  itemNo: number;
  price: number;
  quantity: number;
  maxQuantity: number;
}

export interface ICart {
  cart: ICartItem[];
}
