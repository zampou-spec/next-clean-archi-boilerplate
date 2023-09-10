import Layout from '~/infrastructure/ui/layouts';

import styles from './HomeTemplate.module.scss';

const HomeTemplate = () => {
  return (
    <Layout>
      <h1 className={styles.homeTemplate}>Home Page</h1>
    </Layout>
  );
};

export default HomeTemplate;
