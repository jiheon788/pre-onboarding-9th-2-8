import { useAppDispatch, useAppSelector } from '@/store/config';
import { ICartItem, setCart } from '@/store/slices/cartSlice';
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
  useDisclosure,
} from '@chakra-ui/react';
import ProductModal from './ProductModal';

interface IProductCardProps {
  product: any;
}

const ProductCard = ({ product }: IProductCardProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { cart } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const onReserve = (itemNo: number, price: number, maxQuantity: number) => {
    let tempCart = JSON.parse(JSON.stringify(cart));
    const INDEX = tempCart.findIndex(
      (tempItem: ICartItem) => tempItem.itemNo === itemNo,
    );

    if (INDEX === -1) {
      tempCart.push({ itemNo, price, maxQuantity, quantity: 1 });
    } else {
      tempCart[INDEX].quantity += 1;
    }

    dispatch(setCart(tempCart));
  };

  return (
    <>
      <button onClick={() => console.log(cart)}>cart</button>
      <Card>
        <CardBody onClick={onOpen}>
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
          <Button
            variant="solid"
            colorScheme="teal"
            onClick={() =>
              onReserve(product.idx, product.price, product.maximumPurchases)
            }
          >
            예약하기
          </Button>
        </CardFooter>
      </Card>

      <ProductModal isOpen={isOpen} onClose={onClose} product={product} />
    </>
  );
};

export default ProductCard;
