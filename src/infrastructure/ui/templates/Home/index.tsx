import { Icon } from 'shared/styles';
import { Button } from '@mui/material';
import styles from './HomeTemplate.module.scss';

const HomeTemplate = () => {
  return (
    <div className={styles.homeTemplate}>
      <Button
        disableElevation
        color="secondary"
        variant="contained"
        className={styles.helloWord}
        startIcon={<Icon icon="mdi:account" />}
      >
        Hello word
      </Button>
    </div>
  );
};

export default HomeTemplate;
