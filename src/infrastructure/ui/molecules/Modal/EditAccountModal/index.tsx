'use client';
import { ReactElement } from 'react';
import { Modal, ModalOpenButton, ModalProvider } from '~/shared/ui/components';
import EditAccountForm from '~/infrastructure/ui/molecules/Form/EditAccountForm';

export type EditAccountModalProps = {
  title: string;
  button: ReactElement;
};

const EditAccountModal = ({ title, button }: EditAccountModalProps) => (
  <ModalProvider>
    <Modal width="450px" title={title}>
      <EditAccountForm />
    </Modal>
    <ModalOpenButton>{button}</ModalOpenButton>
  </ModalProvider>
);

export default EditAccountModal;
