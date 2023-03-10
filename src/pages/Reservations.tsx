import ReservationTable from '@/components/reservations/ReservationTable';
import { Center, VStack, Heading } from '@chakra-ui/react';

const Reservations = () => {
  return (
    <>
      <Center as="main" bg="tomato" w="100%">
        <VStack as="section" bg="blue.100" w="85%" minW="500px" p={4}>
          <Heading>장바구니</Heading>
          <ReservationTable></ReservationTable>
        </VStack>
      </Center>
    </>
  );
};
export default Reservations;
