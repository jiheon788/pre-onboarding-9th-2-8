import { HStack, Center } from '@chakra-ui/react';
import Filter from '@/components/Filter';
import ProductList from '@/components/ProductList';

const Main = () => {
  return (
    <Center as="main" bg="tomato" w="100%">
      <HStack as="section" bg="tomato" w="50%">
        <Filter />
        <ProductList />
      </HStack>
    </Center>
  );
};
export default Main;
