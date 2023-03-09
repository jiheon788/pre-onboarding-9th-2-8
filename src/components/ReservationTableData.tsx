import { ICartItem } from '@/interface/product';

import { Tr, Td, Button, useDisclosure } from '@chakra-ui/react';
import AlertByDelete from './AlertByDelete';

interface IReservationTableDataProps {
  cartItem: ICartItem;
}

const ReservationTableData = ({ cartItem }: IReservationTableDataProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Tr key={cartItem.idx}>
      <Td>{cartItem.idx}</Td>
      <Td>{cartItem.name}</Td>
      <Td isNumeric>{cartItem.price}</Td>
      <Td>
        {cartItem.qty} / {cartItem.maxQty}
      </Td>
      <Td>
        <Button type="button" colorScheme="red" size="sm" onClick={onOpen}>
          Delete
        </Button>
        <AlertByDelete isOpen={isOpen} onClose={onClose} cartItem={cartItem} />
      </Td>
    </Tr>
  );
};

export default ReservationTableData;
