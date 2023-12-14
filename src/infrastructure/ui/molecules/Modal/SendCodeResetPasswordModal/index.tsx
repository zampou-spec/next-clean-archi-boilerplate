import { Modal, ModalOpenButton, ModalProvider } from '~/shared/ui/components';

import { ReactElement } from 'react';
import SendCodeResetPasswordForm from '~/infrastructure/ui/molecules/Form/Auth/SendCodeResetPasswordForm';

type SendCodeResetPasswordModalProps = {
  button: ReactElement;
};

const SendCodeResetPasswordModal = ({ button }: SendCodeResetPasswordModalProps) => (
  <ModalProvider>
    <Modal width="450px" title={'Demandez un code'}>
      <SendCodeResetPasswordForm />
    </Modal>
    <ModalOpenButton>{button}</ModalOpenButton>
  </ModalProvider>
);

export default SendCodeResetPasswordModal;
