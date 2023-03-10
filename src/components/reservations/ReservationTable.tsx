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
import { getTotalPaymentAmount, getTotalQty } from '@/lib/utils/cartHelpers';

const ReservationTable = () => {
  const { cart } = useAppSelector((state) => state);

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>상품번호</Th>
            <Th>이름</Th>
            <Th isNumeric>가격</Th>
            <Th>구매 수량</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {cart.map((cartItem) => (
            <ReservationTableData key={cartItem.idx} cartItem={cartItem} />
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th></Th>
            <Th isNumeric>TOTAL</Th>
            <Th>{formatNumToWon(getTotalPaymentAmount(cart))}</Th>
            <Th>{getTotalQty(cart)} 개</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default ReservationTable;
