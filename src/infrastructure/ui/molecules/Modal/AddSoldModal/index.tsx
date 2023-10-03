import { ReactElement } from 'react';
import AddSoldForm from '~/infrastructure/ui/molecules/Form/AddSoldForm';
import { Modal, ModalOpenButton, ModalProvider } from '~/shared/ui/components';

type AddSoldProps = {
  button: ReactElement;
};

const AddSoldModal = ({ button }: AddSoldProps) => {
  return (
    <ModalProvider>
      <Modal width="450px" title="Acheter des seances (4)">
        <AddSoldForm />
      </Modal>
      <ModalOpenButton>{button}</ModalOpenButton>
    </ModalProvider>
  );
};

export default AddSoldModal;
