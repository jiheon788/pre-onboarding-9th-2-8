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
  Box,
} from '@chakra-ui/react';
import { IProduct } from '@/interface/product';
import { useAppDispatch, useAppSelector } from '@/store';
import { onOpen } from '@/store/slices/modalSlice';
import { setCart } from '@/store/slices/cartSlice';
import { formatNumToWon, generateToastTemplate } from '@/lib/utils/uiHelpers';
import { Commands } from '@/constants/system';
import { MouseEvent } from 'react';

const ProductCard = (productData: IProduct) => {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state);
  const toast = useToast();

  const handleReservation = (e: MouseEvent, product: IProduct) => {
    e.stopPropagation();
    const { idx, name, price, maximumPurchases } = product;
    const matchedCartItem = cart.filter((cartItem) => cartItem.idx === idx)[0];

    if (!!matchedCartItem && matchedCartItem?.qty === matchedCartItem?.maxQty) {
      toast(
        generateToastTemplate(
          `장바구니 담기 실패`,
          'error',
          `${matchedCartItem?.name}는 인당 ${matchedCartItem?.maxQty}개만 구매하실 수 있습니다.`,
        ),
      );
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
    toast(generateToastTemplate(`${name} 장바구니 담기 성공`, 'success'));
  };

  return (
    <Card
      maxW="260px"
      variant="outline"
      onClick={() => dispatch(onOpen(productData))}
      cursor="pointer"
      border="none"
      borderRadius="2px"
      overflow="hidden"
      _hover={{ boxShadow: '2px 2px 10px lightgray' }}
      position="relative"
      p="2"
    >
      <Box
        position="absolute"
        bg="white"
        borderRadius="2px"
        w="20px"
        top="4"
        left="4"
        textAlign="center"
        fontWeight="bold"
      >
        {productData.idx}
      </Box>
      <Image
        objectFit="cover"
        w="100%"
        src={productData.mainImage}
        alt={productData.name}
        fallback={
          <Box w="100%" h="100%">
            <Center>
              <Spinner />
            </Center>
          </Box>
        }
      />
      <Stack flex="1">
        <CardBody py="0" px="3">
          <Stack direction="row" py="3">
            <Badge bg="#FFF1DC">{productData.spaceCategory}</Badge>
          </Stack>
          <Heading size="sm">{productData.name}</Heading>

          <Text py="2" fontSize="14px">
            {productData.description}
          </Text>
        </CardBody>
        <CardFooter px="3" justifyContent="space-between" alignItems="center">
          <Text fontSize="lg" fontWeight="bold">
            {formatNumToWon(productData.price)}
          </Text>
          <Button
            variant="solid"
            size="sm"
            bg="#789BFB"
            color="white"
            onClick={(e) => handleReservation(e, productData)}
            _hover={{ bg: '#789bfbb5' }}
          >
            예약 하기
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};
export default ProductCard;
