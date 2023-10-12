import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import menus from '~/infrastructure/ui/atoms/Menu';
import { Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

import styles from './DesktopMenuList.module.scss';

const DesktopMenuList = () => {
  const pathname = usePathname();

  return (
    <Box className={styles.desktopMenuList}>
      <List className={styles.list}>
        {menus.map((menu, index) => (
          <ListItem key={index} disablePadding className={classNames(styles.listItem, styles.active)}>
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

export default DesktopMenuList;
