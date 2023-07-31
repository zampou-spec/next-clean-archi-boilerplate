import { Icon } from 'shared/styles';
import { Button } from '@mui/material';
import styles from './HomeTemplate.module.scss';

const HomeTemplate = () => {
  return (
    <Button className={styles.btn} startIcon={<Icon icon="mdi:account" />} variant="contained" color="secondary" disableElevation>
      Hello word
    </Button>
  );
};

export default HomeTemplate;
