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
} from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '@/store';
import { useEffect, useState } from 'react';

const ReservationTable = () => {
  const { cart } = useAppSelector((state) => state);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
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
            <Tr key={cartItem.idx}>
              <Td>{cartItem.idx}</Td>
              <Td>{cartItem.name}</Td>
              <Td isNumeric>{cartItem.price}</Td>
              <Td>
                {cartItem.qty} / {cartItem.maxQty}
              </Td>
              <Td>
                <Button colorScheme="red" size="sm">
                  Delete
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default ReservationTable;
