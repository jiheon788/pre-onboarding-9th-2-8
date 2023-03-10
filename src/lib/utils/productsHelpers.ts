import { IProduct } from '@/interface/product';

const getUniqueSpaces = (products: IProduct[]) => [
  ...new Set(products.map((product) => product.spaceCategory)),
];

export const generateBoolMappedObj = (products: IProduct[], bool: boolean) =>
  getUniqueSpaces(products).reduce((acc, cur) => {
    return { ...acc, [cur]: bool };
  }, {});

export const getMaxPrice = (products: IProduct[]) =>
  Math.max(...products.map((product) => product.price));
