import Layout from '~/infrastructure/ui/layouts';
import NewDetails from '~/infrastructure/ui/organismes/NewDetails';

type NewDetailsTemplateProps = {
  newId: number;
};

const NewDetailsTemplate = ({ newId }: NewDetailsTemplateProps) => (
  <Layout>
    <NewDetails newId={newId} />
  </Layout>
);

export default NewDetailsTemplate;
