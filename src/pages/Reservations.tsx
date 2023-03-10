import ReservationTable from '@/components/reservations/ReservationTable';
import { Center, VStack, Heading } from '@chakra-ui/react';

const Reservations = () => {
  return (
    <>
      <Center as="main" w="100%" maxW="1280px" mx="auto">
        <VStack as="section" w="100%" p={4}>
          <Heading>장바구니</Heading>
          <ReservationTable></ReservationTable>
        </VStack>
      </Center>
    </>
  );
};
export default Reservations;
