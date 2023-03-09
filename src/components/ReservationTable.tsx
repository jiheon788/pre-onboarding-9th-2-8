import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '@/store';
import { useEffect, useState } from 'react';
import { deleteItem } from '@/store/slices/cartSlice';
import AlertByDelete from './AlertByDelete';
import ReservationTableData from './ReservationTableData';

const ReservationTable = () => {
  const { cart } = useAppSelector((state) => state);

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Product No.</Th>
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
