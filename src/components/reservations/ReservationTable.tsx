import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  Text,
  Tfoot,
} from '@chakra-ui/react';
import { useAppSelector } from '@/store';
import ReservationTableData from './ReservationTableData';
import { formatNumToWon } from '@/lib/utils/uiHelpers';
import { getTotalPaymentAmount, getTotalQty } from '@/lib/utils/cartHelpers';

const ReservationTable = () => {
  const { cart } = useAppSelector((state) => state);

  return (
    <TableContainer w="100%">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th textAlign="center">상품번호</Th>
            <Th textAlign="center">이름</Th>
            <Th isNumeric>가격</Th>
            <Th textAlign="center">구매 수량</Th>
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
            <Th textAlign="center" pt="5">
              <Text fontSize="xl">TOTAL</Text>
            </Th>
            <Th></Th>
            <Th textAlign="end" pt="5">
              <Text fontSize="xl">
                {formatNumToWon(getTotalPaymentAmount(cart))}{' '}
              </Text>
            </Th>
            <Th textAlign="center" pt="5">
              <Text fontSize="xl">{getTotalQty(cart)} 개</Text>
            </Th>
            <Th></Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default ReservationTable;
