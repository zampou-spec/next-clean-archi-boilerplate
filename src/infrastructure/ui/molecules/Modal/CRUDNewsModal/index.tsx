import { ReactElement } from 'react';
import { News } from '~/domain/entities';
import { Modal, ModalOpenButton, ModalProvider } from '~/shared/ui/components';
import DeleteNewsForm from 'src/infrastructure/ui/molecules/Form/News/DeleteNewsForm';
import EditOrCreateNewsForm from 'src/infrastructure/ui/molecules/Form/News/EditOrCreateNewsForm';

export type CRUDNewsModalProps = {
  news: News;
  title: string;
  button: ReactElement;
  type: 'edit' | 'create' | 'delete';
};

const CRUDNewsModal = ({ type, title, button, news }: CRUDNewsModalProps) => (
  <ModalProvider>
    <Modal width="450px" title={title}>
      {type === 'delete' ? <DeleteNewsForm newId={news.id as number} /> : <EditOrCreateNewsForm type={type} news={news} />}
    </Modal>
    <ModalOpenButton>{button}</ModalOpenButton>
  </ModalProvider>
);

export default CRUDNewsModal;
