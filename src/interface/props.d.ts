import { IProduct } from './main';

export interface IProductCardProps {
  product: IProduct;
}

export interface IProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: IProduct;
}
