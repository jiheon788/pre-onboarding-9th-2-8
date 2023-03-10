import {
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { useAppDispatch } from '@/store';
import { deleteItem } from '@/store/slices/cartSlice';
import { IAlertByDeleteProps } from '@/interface/props';

const AlertByDelete = ({ isOpen, onClose, cartItem }: IAlertByDeleteProps) => {
  const dispatch = useAppDispatch();
  const cancelRef = useRef(null);
  const onDeleteItem = (idx: number) => {
    dispatch(deleteItem(idx));
    onClose();
  };

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {cartItem.name}
          </AlertDialogHeader>

          <AlertDialogBody>정말 지우시겠습니까?</AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              취 소
            </Button>
            <Button
              bg="red.400"
              color="white"
              _hover={{ bg: 'red.600' }}
              onClick={() => onDeleteItem(cartItem.idx)}
              ml={3}
            >
              삭 제
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default AlertByDelete;
