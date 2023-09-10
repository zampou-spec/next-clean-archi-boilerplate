import { Button } from '@mui/material';
import RemoveSoldForm from '~/infrastructure/ui/molecules/Form/RemoveSoldForm';
import { SubscribesData } from '~/infrastructure/ui/molecules/Table/UsersTable';
import { Iconify, Modal, ModalOpenButton, ModalProvider } from '~/shared/ui/components';

export type RemoveSoldModalBasicProps = {
  userId: string;
  subscribes: SubscribesData[];
};

const RemoveSoldModal = ({ userId, subscribes }: RemoveSoldModalBasicProps) => {
  return (
    <ModalProvider>
      <Modal width="450px" title="Basic Remove Sold">
        <RemoveSoldForm userId={userId} subscribes={subscribes} />
      </Modal>
      <ModalOpenButton>
        <Button variant="contained">
          <Iconify icon="mdi:numeric-negative-1" fontSize={20} />
        </Button>
      </ModalOpenButton>
    </ModalProvider>
  );
};

export default RemoveSoldModal;
