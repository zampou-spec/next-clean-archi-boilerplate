import { ReactElement } from 'react';
import { Modal, ModalOpenButton, ModalProvider } from '~/shared/ui/components';
import { ChapterDatable } from '~/infrastructure/ui/molecules/Table/ChapterTable';
import DeleteChapterForm from '~/infrastructure/ui/molecules/Form/Chapter/DeleteChapterForm';
import EditOrCreateChapterForm from 'src/infrastructure/ui/molecules/Form/Chapter/EditOrCreateChapterForm';

export type EditOrCreateCourseModalProps = {
  title: string;
  button: ReactElement;
  chapter: ChapterDatable;
  type: 'edit' | 'create' | 'delete';
};

const CRUDChapterModal = ({ type, title, button, chapter }: EditOrCreateCourseModalProps) => {
  return (
    <ModalProvider>
      <Modal width="450px" title={title}>
        {type === 'delete' ? (
          <DeleteChapterForm chapterId={chapter.id} />
        ) : (
          <EditOrCreateChapterForm type={type} chapter={chapter} />
        )}
      </Modal>
      <ModalOpenButton>{button}</ModalOpenButton>
    </ModalProvider>
  );
};

export default CRUDChapterModal;
