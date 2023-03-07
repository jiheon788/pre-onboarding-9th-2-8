import { getProducts } from '@/api/products';
import ProductCard from '@/components/ProductCard';
import { useEffect, useState } from 'react';
import { Container, Grid, GridItem } from '@chakra-ui/react';

const MainPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <Container maxW={{ base: 'sm', lg: '3xl' }}>
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
        gap={6}
      >
        {products.map((product: any) => (
          <GridItem key={product.idx}>
            <ProductCard product={product} />
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};

export default MainPage;
