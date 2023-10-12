import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import adminMenus from '~/infrastructure/ui/atoms/Menu/admin';
import { Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

import styles from './AdminMenuList.module.scss';

const AdminMenuList = () => {
  const pathname = usePathname();

  return (
    <Box className={styles.adminMenuList}>
      <List className={styles.list}>
        {adminMenus.map((menu, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              href={menu.link}
              className={classNames(styles.listItemButton, {
                [styles.active]: pathname === menu.link
              })}
            >
              <ListItemText primary={menu.title} className={styles.listItemText} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default AdminMenuList;
