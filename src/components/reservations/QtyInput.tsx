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
import { Commands, Units } from '@/constants/system';
import { ICartItemProps } from '@/interface/props';

const QtyInput = ({ cartItem }: ICartItemProps) => {
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
      minW="100px"
      maxW="150px"
      mx="auto"
      defaultValue={cartItem.qty}
      min={Units.QTY_DEFAULT}
      max={cartItem.maxQty}
    >
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper
          onClick={() => onControlQty(cartItem, Commands.INCREASE)}
        />
        <NumberDecrementStepper
          onClick={() => onControlQty(cartItem, Commands.DECREASE)}
        />
      </NumberInputStepper>
    </NumberInput>
  );
};

export default QtyInput;
