import { HStack, Center } from '@chakra-ui/react';
import ProductList from '@/components/main/ProductList';
import ProductModal from '@/components/main/ProductModal';

const Main = () => {
  return (
    <>
      <Center as="main" bg="tomato" w="100%">
        <HStack as="section" bg="tomato" w="50%">
          <ProductList />
        </HStack>
      </Center>
      <ProductModal />
    </>
  );
};
export default Main;
