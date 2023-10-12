import { Iconify } from '~/shared/ui/components/Iconify';
import { Box, List, ListItem, ListItemButton, Button } from '@mui/material';

import styles from './MobileAuthList.module.scss';

const MobileAuthList = () => (
  <Box className={styles.mobileAuthList}>
    <List className={styles.list}>
      <ListItem disablePadding>
        <ListItemButton className={styles.listItemButton}>
          <Button variant="contained" href="/auth/signin" startIcon={<Iconify icon="mdi:login-variant" />} fullWidth>
            Se connecter
          </Button>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton className={styles.listItemButton}>
          <Button variant="contained" href="/auth/signup" startIcon={<Iconify icon="mdi:text-box-outline" />} fullWidth>
            S&apos;inscrire
          </Button>
        </ListItemButton>
      </ListItem>
    </List>
  </Box>
);

export default MobileAuthList;
