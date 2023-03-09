import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  Tfoot,
} from '@chakra-ui/react';
import { useAppSelector } from '@/store';
import ReservationTableData from './ReservationTableData';
import { formatNumToWon } from '@/lib/utils/uiHelpers';
import { getTotalPaymentAmount } from '@/lib/utils/cartHelper';

const ReservationTable = () => {
  const { cart } = useAppSelector((state) => state);

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>No.</Th>
            <Th>Name</Th>
            <Th isNumeric>Price</Th>
            <Th>Qty</Th>
            <Th>Delete</Th>
          </Tr>
        </Thead>
        <Tbody>
          {cart.map((cartItem) => (
            <ReservationTableData key={cartItem.idx} cartItem={cartItem} />
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th isNumeric>총 결제 금액</Th>
            <Th isNumeric></Th>
            <Th isNumeric>{formatNumToWon(getTotalPaymentAmount(cart))}</Th>
            <Th isNumeric></Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default ReservationTable;
