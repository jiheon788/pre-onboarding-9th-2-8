import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Image,
  Stack,
  Text,
  Badge,
} from '@chakra-ui/react';

interface IProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: any;
}

const ProductModal = ({ isOpen, onClose, product }: IProductModalProps) => {
  console.log(product);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{product.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image
            src={product.mainImage}
            alt={`${product.name} thumbnail`}
            borderRadius="lg"
          />
          <Stack mt="6" spacing="2">
            <Text fontSize="sm">
              Product No.{product.idx}
              <Badge colorScheme="teal">{product.spaceCategory}</Badge>
            </Text>
            <Text>{product.description}</Text>
            <Text color="teal" fontSize="2xl">
              &#8361; {product.price}
            </Text>
            <Text>최대 구매 개수 {product.maximumPurchases}</Text>
            <Text>등록일자 {product.registrationDate}</Text>
          </Stack>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            예약하기
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProductModal;
