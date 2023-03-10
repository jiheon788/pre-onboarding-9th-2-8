import { useEffect, useState } from 'react';
import {
  Heading,
  VStack,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Stack,
  Text,
  Wrap,
  Button,
  HStack,
  Box,
  useDisclosure,
  Fade,
  Spacer,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { getProducts } from '@/store/slices/productSlice';
import Product from '@/components/main/ProductCard';
import { IProduct } from '@/interface/product';
import { RootState, useAppDispatch, useAppSelector } from '@/store';
import {
  generateBoolMappedObj,
  getMaxPrice,
} from '@/lib/utils/productsHelpers';
import SpaceTag from './SpaceTag';
import { formatNumToWon } from '@/lib/utils/uiHelpers';

const ProductList = () => {
  const dispatch = useAppDispatch();
  const {
    products: { products },
  } = useAppSelector((state: RootState) => state);

  const { isOpen, onToggle } = useDisclosure();
  const [currentValues, setCurrentValues] = useState<number[]>([]);
  const [spaceHashMap, setSpaceHashMap] = useState<{ [key: string]: boolean }>(
    {},
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    setCurrentValues([0, getMaxPrice(products)]);
    setSpaceHashMap(generateBoolMappedObj(products, true));
  }, [products]);

  const onSlidePrice = (event: number[]) => {
    setCurrentValues(
      event.map((value) => Math.floor((value / 100) * getMaxPrice(products))),
    );
  };

  const onToggleSpace = (key: string) => {
    setSpaceHashMap({
      ...spaceHashMap,
      [key]: !spaceHashMap[key],
    });
  };

  const filteredProducts = products.filter((product: IProduct) => {
    const [currentMin, currentMax] = currentValues;

    return (
      product.price >= currentMin &&
      product.price <= currentMax &&
      spaceHashMap[product.spaceCategory]
    );
  });

  return (
    <Stack as="section" w="100%" minW="500px" p={4} position="relative">
      <HStack position="relative">
        <Heading mx="auto" mb="5">
          상품 정보
        </Heading>
        <Button position="absolute" top="0" right="60px" onClick={onToggle}>
          <SearchIcon mr="2" /> 필터
        </Button>
      </HStack>

      <Wrap spacing="30px" justify="center" pb="4">
        {filteredProducts.map((product: IProduct) => (
          <Product key={product.idx} {...product} />
        ))}
      </Wrap>
      <Fade in={isOpen}>
        <Box
          position="absolute"
          top="60px"
          right="120px"
          bg="white"
          border="1px solid lightgray"
          borderRadius="2px"
          py="25px"
          px="80px"
        >
          <VStack as="section" w="100%" h="200px">
            <Heading fontSize="lg" mb="20px">
              필터 옵션
            </Heading>
            <Text>가격</Text>
            <RangeSlider defaultValue={[0, 100]} onChange={onSlidePrice}>
              <RangeSliderTrack>
                <RangeSliderFilledTrack bg="#789BFB" />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} bg="#b0c4fa" />
              <RangeSliderThumb index={1} bg="#b0c4fa" />
            </RangeSlider>
            <Text fontSize="12px">
              {formatNumToWon(currentValues[0])} ~{' '}
              {formatNumToWon(currentValues[1])}
            </Text>
            <Spacer flex="1" />
            <Text>지역</Text>
            <Stack direction="row">
              {Object.keys(spaceHashMap).map((spaceKey) => (
                <SpaceTag
                  key={spaceKey}
                  spaceKey={spaceKey}
                  spaceHashMap={spaceHashMap}
                  onToggleSpace={onToggleSpace}
                />
              ))}
            </Stack>
          </VStack>
        </Box>
      </Fade>
    </Stack>
  );
};
export default ProductList;
