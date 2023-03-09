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
  useToast,
  Badge,
} from '@chakra-ui/react';
import { IProduct } from '@/interface/product';
import { useAppDispatch, useAppSelector } from '@/store';
import { onOpen } from '@/store/slices/modalSlice';
import { setCart } from '@/store/slices/cartSlice';
import { formatNumToWon } from '@/lib/utils/uiHelpers';
import { Commands } from '@/constants/system';

const ProductCard = (productData: IProduct) => {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state);
  const toast = useToast();

  const handleReservation = (product: IProduct) => {
    const { idx, name, price, maximumPurchases } = product;

    const matchedCartItem = cart.filter((cartItem) => cartItem.idx === idx)[0];

    if (!!matchedCartItem && matchedCartItem?.qty === matchedCartItem?.maxQty) {
      toast({
        title: `장바구니 담기 실패`,
        description: `${matchedCartItem?.name}는 인당 ${matchedCartItem?.maxQty}개만 구매하실 수 있습니다.`,
        position: 'top-right',
        status: 'error',
        isClosable: true,
      });
      return;
    }

    dispatch(
      setCart({
        idx,
        name,
        price,
        maximumPurchases,
        commandType: matchedCartItem ? Commands.INCREASE : Commands.INITIALIZE,
      }),
    );

    toast({
      title: `${name} 장바구니 담기 성공`,
      position: 'top-right',
      status: 'success',
      isClosable: true,
    });
  };

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
          <Stack direction="row">
            <Badge colorScheme="green">
              {formatNumToWon(productData.price)}
            </Badge>
            <Badge colorScheme="purple">{productData.spaceCategory}</Badge>
          </Stack>
          <Text py="2">{productData.description}</Text>
          <Text py="2">등록번호 : {productData.idx}</Text>
        </CardBody>
        <CardFooter gap="5px">
          <Button
            variant="solid"
            colorScheme="blue"
            onClick={() => handleReservation(productData)}
          >
            예 약
          </Button>
          <Button
            variant="solid"
            colorScheme="blue"
            onClick={() => dispatch(onOpen(productData))}
          >
            더 보 기
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};
export default ProductCard;
