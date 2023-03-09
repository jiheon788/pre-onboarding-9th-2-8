import { Table, Thead, Tbody, Tr, Th, TableContainer } from '@chakra-ui/react';
import { useAppSelector } from '@/store';
import ReservationTableData from './ReservationTableData';

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
      </Table>
    </TableContainer>
  );
};

export default ReservationTable;
