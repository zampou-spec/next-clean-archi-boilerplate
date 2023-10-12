import { IconButton } from '@mui/material';
import { Iconify } from '~/shared/ui/components/Iconify';
import MobileAuthList from '~/infrastructure/ui/molecules/List/MobileAuthList';
import { DrawerOpenButton, DrawerProvider, Drawer } from '~/shared/ui/components';

import styles from './MobileAuthDrawer.module.scss';

const MobileAuthDrawer = () => (
  <DrawerProvider>
    <Drawer anchor="right">
      <MobileAuthList />
    </Drawer>
    <DrawerOpenButton>
      <IconButton className={styles.mobileAuthDrawer}>
        <Iconify icon="mdi:account-circle-outline" />
      </IconButton>
    </DrawerOpenButton>
  </DrawerProvider>
);

export default MobileAuthDrawer;
