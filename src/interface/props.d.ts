export interface ISpaceTagProps {
  spaceKey: string;
  spaceHashMap: { [key: string]: boolean };
  onToggleSpace: (key: string) => void;
}

interface IAlertByDeleteProps {
  isOpen: boolean;
  onClose: () => void;
  cartItem: ICartItem;
}

interface ICartItemProps {
  cartItem: ICartItem;
}
