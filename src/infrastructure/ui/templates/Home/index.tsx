// import styles from './HomeTemplate.module.scss';

import Player from '~/infrastructure/ui/organismes/Player';

import Layout from '~/infrastructure/ui/layouts';

const HomeTemplate = () => {
  return (
    <Layout>
      <h1>Home Page</h1>
      <Player />
    </Layout>
  );
};

export default HomeTemplate;
