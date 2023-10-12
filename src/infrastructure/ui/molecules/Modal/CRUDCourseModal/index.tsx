import { ReactElement } from 'react';
import { Modal, ModalOpenButton, ModalProvider } from '~/shared/ui/components';
import { CoursesDatable } from 'src/infrastructure/ui/molecules/Table/CoursesTable';
import DeleteCourseForm from '~/infrastructure/ui/molecules/Form/Course/DeleteCourseForm';
import EditOrCreateCourseForm from 'src/infrastructure/ui/molecules/Form/Course/EditOrCreateCourseForm';

export type CRUDCourseModalProps = {
  title: string;
  button: ReactElement;
  course: CoursesDatable;
  type: 'edit' | 'create' | 'delete';
};

const CRUDCourseModal = ({ type, title, button, course }: CRUDCourseModalProps) => (
  <ModalProvider>
    <Modal width="450px" title={title}>
      {type === 'delete' ? <DeleteCourseForm courseId={course.id} /> : <EditOrCreateCourseForm type={type} course={course} />}
    </Modal>
    <ModalOpenButton>{button}</ModalOpenButton>
  </ModalProvider>
);

export default CRUDCourseModal;
