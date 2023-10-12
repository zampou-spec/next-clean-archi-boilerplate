import { Button } from '@mui/material';
import RemoveSoldForm from '~/infrastructure/ui/molecules/Form/RemoveSoldForm';
import { SubscribesData } from '~/infrastructure/ui/molecules/Table/UsersTable';
import { Modal, ModalOpenButton, ModalProvider } from '~/shared/ui/components';
import { Iconify } from '~/shared/ui/components/Iconify';

export type RemoveSoldModalProps = {
  userId: string;
  subscribes: SubscribesData[];
};

const RemoveSoldModal = ({ userId, subscribes }: RemoveSoldModalProps) => (
  <ModalProvider>
    <Modal width="450px" title="Retirez une seance">
      <RemoveSoldForm userId={userId} subscribes={subscribes} />
    </Modal>
    <ModalOpenButton>
      <Button variant="contained">
        <Iconify icon="mdi:numeric-negative-1" fontSize={20} />
      </Button>
    </ModalOpenButton>
  </ModalProvider>
);

export default RemoveSoldModal;
