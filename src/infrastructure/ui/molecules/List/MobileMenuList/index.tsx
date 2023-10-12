import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import menus from '~/infrastructure/ui/atoms/Menu';
import { Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

import styles from './MobileMenuList.module.scss';

const MobileMenuList = () => {
  const pathname = usePathname();

  return (
    <Box className={styles.mobileMenuList}>
      <List className={styles.list}>
        {menus.map((menu, index) => (
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

export default MobileMenuList;
