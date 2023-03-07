import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Center,
  Heading,
  Image,
  Spinner,
  Stack,
  Text,
} from '@chakra-ui/react';
import { IProduct } from '@/interface/product';

const Product = (productData: IProduct) => {
  return (
    <Card direction={{ base: 'column', sm: 'row' }} w="100%" variant="outline">
      <Image
        objectFit="cover"
        maxW={{ base: '100%', sm: '200px' }}
        src={productData.mainImage}
        alt={productData.name}
        fallback={
          <Center w="40%" h="100%">
            <Spinner />
          </Center>
        }
      />
      <Stack>
        <CardBody>
          <Heading size="md">{productData.name}</Heading>
          <Text py="2">{productData.description}</Text>
        </CardBody>
        <CardFooter gap="5px">
          <Button variant="solid" colorScheme="blue">
            예 약
          </Button>
          <Button variant="solid" colorScheme="blue">
            더 보 기
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};
export default Product;
