import CourseDetailsTemplate from '~/infrastructure/ui/templates/Dashboard/Admin/Courses/CourseDetails';

const CourseDetailsPage = ({ params }: { params: { courseId: number | string } }) => {
  console.log(params);
  return <CourseDetailsTemplate />;
};

export default CourseDetailsPage;
