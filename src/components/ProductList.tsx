import { useEffect, useState } from 'react';
import {
  Heading,
  VStack,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Tag,
  Stack,
} from '@chakra-ui/react';
import { getProducts } from '@/store/slices/productSlice';
import Product from '@/components/Product';
import { IProduct } from '@/interface/product';
import { RootState, useAppDispatch, useAppSelector } from '@/store';

const ProductList = () => {
  const dispatch = useAppDispatch();
  const {
    products: { products },
  } = useAppSelector((state: RootState) => state);

  const [defaultMax, setDefaultMax] = useState(0);
  const [currentValues, setCurrentValues] = useState<number[]>([]);
  const [spaceMap, setSpaceMap] = useState<any>([]);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    setDefaultMax(Math.max(...products.map((product) => product.price)));

    setSpaceMap(
      [...new Set(products.map((product) => product.spaceCategory))].reduce(
        (acc, cur) => {
          return { ...acc, [cur]: true };
        },
        {},
      ),
    );
  }, [products]);

  useEffect(() => {
    setCurrentValues([0, defaultMax]);
  }, [defaultMax]);

  const onSlide = (event: number[]) => {
    setCurrentValues(event.map((val) => (val / 100) * defaultMax));
  };

  const onToggleSpace = (key: string) => {
    setSpaceMap({
      ...spaceMap,
      [key]: !spaceMap[key],
    });
  };

  const filteredProducts = products.filter((product: IProduct) => {
    const [currentMin, currentMax] = currentValues;

    return (
      product.price >= currentMin &&
      product.price <= currentMax &&
      spaceMap[product.spaceCategory]
    );
  });

  return (
    <VStack as="section" bg="blue.100" w="75%" minW="500px" p={4}>
      <Heading>상품 정보</Heading>
      {defaultMax > 0 && (
        <>
          <RangeSlider
            aria-label={['min', 'max']}
            defaultValue={[0, defaultMax]}
            onChange={onSlide}
          >
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
            <RangeSliderThumb index={1} />
          </RangeSlider>
          {currentValues[0]} {currentValues[1]}
        </>
      )}

      <Stack direction="row">
        {Object.keys(spaceMap).map((spaceKey) => {
          return (
            <Tag
              key={spaceKey}
              variant={spaceMap[spaceKey] ? 'solid' : 'outline'}
              colorScheme="blue"
              onClick={() => onToggleSpace(spaceKey)}
            >
              {spaceKey}
            </Tag>
          );
        })}
      </Stack>

      {filteredProducts.map((product: IProduct) => (
        <Product key={product.idx} {...product} />
      ))}
    </VStack>
  );
};
export default ProductList;
