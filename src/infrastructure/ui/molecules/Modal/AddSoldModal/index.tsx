import { ReactElement } from 'react';
import AddSoldForm from '~/infrastructure/ui/molecules/Form/AddSoldForm';
import { Modal, ModalOpenButton, ModalProvider } from '~/shared/ui/components';

type AddSoldProps = {
  title: string;
  button: ReactElement;
};

const AddSoldModal = ({ title, button }: AddSoldProps) => (
  <ModalProvider>
    <Modal width="450px" title={title}>
      <AddSoldForm />
    </Modal>
    <ModalOpenButton>{button}</ModalOpenButton>
  </ModalProvider>
);

export default AddSoldModal;
