import { ReactElement } from 'react';
import { Product } from '~/domain/entities';
import { Modal, ModalOpenButton, ModalProvider } from '~/shared/ui/components';
import DeleteProductForm from '~/infrastructure/ui/molecules/Form/Product/DeleteProductForm';
import EditOrCreateProductForm from 'src/infrastructure/ui/molecules/Form/Product/EditOrCreateProductForm';

export type CRUDProductModalProps = {
  title: string;
  product: Product;
  button: ReactElement;
  type: 'edit' | 'create' | 'delete';
};

const CRUDProductModal = ({ type, title, button, product }: CRUDProductModalProps) => (
  <ModalProvider>
    <Modal width="450px" title={title}>
      {type === 'delete' ? (
        <DeleteProductForm productId={product.id as number} />
      ) : (
        <EditOrCreateProductForm type={type} product={product} />
      )}
    </Modal>
    <ModalOpenButton>{button}</ModalOpenButton>
  </ModalProvider>
);

export default CRUDProductModal;
