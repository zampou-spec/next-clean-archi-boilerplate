import { ReactElement } from 'react';
import { Modal, ModalOpenButton, ModalProvider } from '~/shared/ui/components';
import OrderProductForm from '~/infrastructure/ui/molecules/Form/Product/OrderProductForm';

export type OrderProductModalProps = {
  title: string;
  button: ReactElement;
};

const OrderProductModal = ({ title, button }: OrderProductModalProps) => (
  <ModalProvider>
    <Modal width="450px" title={title}>
      <OrderProductForm />
    </Modal>
    <ModalOpenButton>{button}</ModalOpenButton>
  </ModalProvider>
);

export default OrderProductModal;
