import { HStack, Box } from '@chakra-ui/react';
import ProductList from '@/components/main/ProductList';
import ProductModal from '@/components/main/ProductModal';

const Main = () => {
  return (
    <>
      <Box maxW="1280px" mx="auto" as="main" w="100%">
        <HStack as="section">
          <ProductList />
        </HStack>
      </Box>
      <ProductModal />
    </>
  );
};
export default Main;
