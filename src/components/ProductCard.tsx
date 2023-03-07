import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Button,
  Text,
  Badge,
  Divider,
} from '@chakra-ui/react';

interface IProductCardProps {
  product: any;
}

const ProductCard = ({ product }: IProductCardProps) => {
  return (
    <Card>
      <CardBody>
        <Image
          src={product.mainImage}
          alt={`${product.name} thumbnail`}
          borderRadius="lg"
        />
        <Stack mt="6" spacing="2">
          <Heading size="md">{product.name}</Heading>
          <Text fontSize="sm">
            Product No.{product.idx}{' '}
            <Badge colorScheme="teal">{product.spaceCategory}</Badge>
          </Text>
          <Text>{product.description}</Text>
          <Text color="teal.600" fontSize="2xl">
            &#8361; {product.price}
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <Button variant="solid" colorScheme="teal">
          예약하기
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
