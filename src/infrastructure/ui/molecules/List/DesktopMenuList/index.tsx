import menus from '~/infrastructure/ui/atoms/Menu';
import { Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

import styles from './DesktopMenuList.module.scss';

const DesktopMenuList = () => {
  return (
    <Box className={styles.desktopMenuList}>
      <List className={styles.list}>
        {menus.map((menu, index) => (
          <ListItem key={index} disablePadding className={styles.listItem}>
            <ListItemButton href={menu.link} className={styles.listItemButton}>
              <ListItemText primary={menu.title} className={styles.listItemText} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default DesktopMenuList;
