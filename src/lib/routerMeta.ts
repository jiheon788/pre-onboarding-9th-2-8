export interface IRouterMeta {
  name?: string;
  path: string;
  isShow: boolean;
}

export type RouterMetaType = {
  [key: string]: IRouterMeta;
};

const routerMeta: RouterMetaType = {
  HomePage: {
    path: '/',
    isShow: false,
  },
  MainPage: {
    name: 'Main',
    path: '/main',
    isShow: true,
  },
  ReservationsPage: {
    name: '장바구니',
    path: '/reservations',
    isShow: true,
  },
};

export default routerMeta;
