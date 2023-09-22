import classNames from 'classnames';
import { Iconify } from '~/shared/ui/components/Iconify';
import { Avatar, Badge, Fab, Typography } from '@mui/material';

import styles from './UserAvatar.module.scss';

type UserAvatarProps = {
  className?: string | number | symbol | undefined;
};

const UserAvatar = ({ className }: UserAvatarProps) => {
  return (
    <div
      className={classNames(styles.userAvatar, {
        [className || '']: Boolean(className)
      })}
    >
      <Typography color="primary" variant="h2" className={styles.title}>
        ! Bienvenido ¡
      </Typography>
      <Badge
        overlap="circular"
        badgeContent={
          <Fab color="primary" size="small" href="#">
            <Iconify icon="mdi:pencil" fontSize={20} />
          </Fab>
        }
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Avatar alt="Travis Howard" src="https://placehold.co/400" sx={{ width: 150, height: 150 }} />
      </Badge>
    </div>
  );
};

export default UserAvatar;
