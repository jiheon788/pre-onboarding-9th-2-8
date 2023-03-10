import { ICartItemProps } from '@/interface/props';
import { formatNumToWon } from '@/lib/utils/uiHelpers';
import { Tr, Td, Button, useDisclosure } from '@chakra-ui/react';
import AlertByDelete from './AlertByDelete';
import QtyInput from './QtyInput';

const ReservationTableData = ({ cartItem }: ICartItemProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Tr>
      <Td textAlign="center">{cartItem.idx}</Td>
      <Td textAlign="center">{cartItem.name}</Td>
      <Td isNumeric>{formatNumToWon(cartItem.price)}</Td>
      <Td>
        <QtyInput cartItem={cartItem}></QtyInput>
      </Td>
      <Td>
        <Button
          type="button"
          bg="red.400"
          color="white"
          _hover={{ bg: 'red.600' }}
          size="md"
          onClick={onOpen}
        >
          삭 제
        </Button>
        <AlertByDelete isOpen={isOpen} onClose={onClose} cartItem={cartItem} />
      </Td>
    </Tr>
  );
};

export default ReservationTableData;
