import { useAppSelector } from '@/store';
import { onClose } from '@/store/slices/modalSlice';
import {
  Badge,
  Button,
  Center,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';

const ProductModal = () => {
  const dispatch = useDispatch();
  const {
    modal: { isOpen, modalData },
  } = useAppSelector((state) => state);

  return (
    <>
      <Modal isOpen={isOpen} onClose={() => dispatch(onClose())}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modalData.name}</ModalHeader>
          <ModalBody>
            <Center>
              <Image
                objectFit="cover"
                maxW={{ base: '100%', sm: '200px' }}
                src={modalData.mainImage}
                alt={modalData.name}
              />
            </Center>
            <Text py="2">{modalData.description}</Text>
            <Stack direction="row">
              <Badge colorScheme="green">
                {Number(modalData.price).toLocaleString()} 원
              </Badge>
              <Badge colorScheme="purple">{modalData.spaceCategory}</Badge>
              <Badge colorScheme="red">
                인 당 {modalData.maximumPurchases}개 구매 제한
              </Badge>
            </Stack>
          </ModalBody>
          <ModalFooter justifyContent="space-between">
            <Text>{modalData.registrationDate} 작성</Text>
            <Text>등록번호 : {modalData.idx}</Text>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => dispatch(onClose())}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default ProductModal;
