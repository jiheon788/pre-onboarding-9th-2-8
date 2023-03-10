import { formatDate, formatNumToWon } from '@/lib/utils/uiHelpers';
import { useAppSelector } from '@/store';
import { onClose } from '@/store/slices/modalSlice';
import {
  Badge,
  Box,
  Button,
  Center,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
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
          <Box
            position="absolute"
            bg="white"
            borderRadius="2px"
            w="20px"
            top="45px"
            left="8"
            textAlign="center"
            fontWeight="bold"
          >
            {modalData.idx}
          </Box>
          <Text position="absolute" top="2" right="6">
            {formatDate(modalData.registrationDate)}
          </Text>
          <ModalBody>
            <Center>
              <Image
                objectFit="cover"
                w="100%"
                mt="7"
                src={modalData.mainImage}
                alt={modalData.name}
              />
            </Center>
            <Stack direction="row" mt="3" mb="2">
              <Badge bg="#FFF1DC">{modalData.spaceCategory}</Badge>
              <Badge colorScheme="red">
                인 당 {modalData.maximumPurchases}개 구매 제한
              </Badge>
            </Stack>
            <Heading fontSize="lg">{modalData.name}</Heading>
            <Text py="1" fontSize="md">
              {modalData.description}
            </Text>
            <Box fontSize="lg" fontWeight="bold">
              {formatNumToWon(modalData.price)}
            </Box>
          </ModalBody>
          <ModalFooter justifyContent="center">
            <Button
              colorScheme="blue"
              onClick={() => dispatch(onClose())}
              size="md"
              bg="#789BFB"
              color="white"
              _hover={{ bg: '#789bfbb5' }}
            >
              닫 기
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default ProductModal;
