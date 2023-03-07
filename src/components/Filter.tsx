import { VStack, VisuallyHidden, Heading } from '@chakra-ui/react';

const Filter = () => {
  return (
    <VStack as="section" bg="blue.100" w="25%" p={4}>
      <VisuallyHidden>
        <Heading>필터 옵션</Heading>
      </VisuallyHidden>
    </VStack>
  );
};
export default Filter;
