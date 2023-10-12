'use client';
import classNames from 'classnames';
import { useSession } from 'next-auth/react';
import { Iconify } from '~/shared/ui/components/Iconify';
import { Avatar, Badge, Fab, Typography, Tooltip } from '@mui/material';
import EditAccountModal from '~/infrastructure/ui/molecules/Modal/EditAccountModal';

import styles from './UserAvatar.module.scss';

type UserAvatarProps = {
  className?: string | number | symbol | undefined;
};

const UserAvatar = ({ className }: UserAvatarProps) => {
  const { data: session } = useSession();

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
          <EditAccountModal
            title="Edit Account Modal"
            button={
              <Tooltip title="Editez mon compte" placement="top">
                <Fab color="primary" size="small">
                  <Iconify icon="mdi:pencil" fontSize={20} />
                </Fab>
              </Tooltip>
            }
          />
        }
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Avatar
          alt="Travis Howard"
          sx={{ width: 150, height: 150 }}
          src={session?.user?.image || "https://placehold.co/400?text=''"}
        />
      </Badge>
    </div>
  );
};

export default UserAvatar;
