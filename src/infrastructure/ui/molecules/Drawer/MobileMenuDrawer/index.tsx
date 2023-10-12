import { IconButton } from '@mui/material';
import { Iconify } from '~/shared/ui/components/Iconify';
import MobileMenuList from '~/infrastructure/ui/molecules/List/MobileMenuList';
import { DrawerOpenButton, DrawerProvider, Drawer } from '~/shared/ui/components';

import styles from './MobileMenuDrawer.module.scss';

const MobileMenuDrawer = () => (
  <DrawerProvider>
    <Drawer anchor="left">
      <MobileMenuList />
    </Drawer>
    <DrawerOpenButton>
      <IconButton className={styles.mobileMenuDrawer}>
        <Iconify icon="mdi:menu" />
      </IconButton>
    </DrawerOpenButton>
  </DrawerProvider>
);

export default MobileMenuDrawer;
