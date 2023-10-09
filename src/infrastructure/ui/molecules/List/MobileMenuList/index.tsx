import menus from '~/infrastructure/ui/atoms/Menu';
import { Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

import styles from './MobileMenuList.module.scss';

const MobileMenuList = () => {
  return (
    <Box className={styles.mobileMenuList}>
      <List className={styles.list}>
        {menus.map((menu, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton href={menu.link} className={styles.listItemButton}>
              <ListItemText primary={menu.title} className={styles.listItemText} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default MobileMenuList;
