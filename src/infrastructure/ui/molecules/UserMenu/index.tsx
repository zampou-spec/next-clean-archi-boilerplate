'use client';
import { User } from '~/domain/entities';
import { stringAvatar } from '~/shared/utils';
import { useState, MouseEvent } from 'react';
import { Menu, IconButton, MenuItem, Typography, Tooltip, Avatar } from '@mui/material';

import styles from './UserMenu.module.scss';

const settings = ['Profile', 'Account', 'Dashboard'];

export type UserMenuProps = {
  user: User;
  onLogout: () => void;
};

const UserMenu = ({ user, onLogout }: UserMenuProps) => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleCloseUserMenu = () => setAnchorElUser(null);
  const handleOpenUserMenu = (e: MouseEvent<HTMLElement>) => setAnchorElUser(e.currentTarget);

  return (
    <div className={styles.userMenu}>
      <div className={styles.action}>
        <Typography sx={{ mr: 2 }}>{user.name}</Typography>
        <Tooltip title="Parametre">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt={user.name} {...stringAvatar(user.name)} />
          </IconButton>
        </Tooltip>
      </div>

      <Menu
        sx={{ mt: '45px' }}
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
        <MenuItem onClick={onLogout}>
          <Typography textAlign="center">Logout</Typography>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default UserMenu;
