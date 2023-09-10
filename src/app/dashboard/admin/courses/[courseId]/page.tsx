import CourseDetailsTemplate from 'src/infrastructure/ui/templates/Dashboard/Admin/CourseDetails';

const CourseDetailsPage = ({ params }: { params: { courseId: number } }) => {
  return <CourseDetailsTemplate courseId={params.courseId} />;
};

export default CourseDetailsPage;
