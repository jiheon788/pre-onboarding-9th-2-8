import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import { ICartItem } from '@/interface/product';
import { useAppDispatch } from '@/store';
import { setCart } from '@/store/slices/cartSlice';

interface IQtyInputProps {
  cartItem: ICartItem;
}
const QtyInput = ({ cartItem }: IQtyInputProps) => {
  const dispatch = useAppDispatch();

  const onControlQty = (product: ICartItem, commandType: string) => {
    const { idx, name, price, maxQty } = product;
    dispatch(
      setCart({
        idx,
        name,
        price,
        maxQty,
        commandType,
      }),
    );
  };

  return (
    <NumberInput
      size="sm"
      defaultValue={cartItem.qty}
      min={1}
      max={cartItem.maxQty}
    >
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper
          onClick={() => onControlQty(cartItem, 'INCREASE')}
        />
        <NumberDecrementStepper
          onClick={() => onControlQty(cartItem, 'DECREASE')}
        />
      </NumberInputStepper>
    </NumberInput>
  );
};

export default QtyInput;
