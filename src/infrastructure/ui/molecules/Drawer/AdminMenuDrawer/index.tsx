'use client';
import { IconButton } from '@mui/material';
import { Iconify } from '~/shared/ui/components/Iconify';
import AdminMenuList from '~/infrastructure/ui/molecules/List/AdminMenuList';
import { DrawerOpenButton, DrawerProvider, Drawer } from '~/shared/ui/components';

import styles from './AdminMenuDrawer.module.scss';

const AdminMenuDrawer = () => (
  <DrawerProvider>
    <Drawer anchor="left">
      <AdminMenuList />
    </Drawer>
    <DrawerOpenButton>
      <IconButton className={styles.adminMenuDrawer}>
        <Iconify icon="mdi:menu" />
      </IconButton>
    </DrawerOpenButton>
  </DrawerProvider>
);

export default AdminMenuDrawer;
