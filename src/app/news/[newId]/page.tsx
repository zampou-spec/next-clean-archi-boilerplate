import NewDetailsTemplate from 'src/infrastructure/ui/templates/NewDetails';

const NewDetailsPage = ({ params }: { params: { newId: number } }) => <NewDetailsTemplate newId={params.newId} />;

export default NewDetailsPage;
