'use client';
import Link from 'next/link';
import { User } from '~/domain/entities';
import { stringAvatar } from '~/shared/utils';
import { useState, MouseEvent, useEffect } from 'react';
import { Menu, IconButton, MenuItem, Typography, Tooltip, Avatar } from '@mui/material';

import styles from './UserMenu.module.scss';

export type UserMenuProps = {
  user: User;
  onLogout: () => void;
};

const UserMenu = ({ user, onLogout }: UserMenuProps) => {
  const [fullName, setFullName] = useState<string>('');
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleCloseUserMenu = () => setAnchorElUser(null);
  const handleOpenUserMenu = (e: MouseEvent<HTMLElement>) => setAnchorElUser(e.currentTarget);

  useEffect(() => {
    setFullName(`${user?.first_name} ${user?.last_name}`);
  }, [user]);

  return (
    <div className={styles.userMenu}>
      <div className={styles.action}>
        <Typography className={styles.text} sx={{ fontWeight: '500' }} variant="body1">
          {fullName}
        </Typography>
        <Tooltip title="Parametre">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt={fullName} {...stringAvatar(fullName)} />
          </IconButton>
        </Tooltip>
      </div>

      <Menu
        sx={{ mt: '50px' }}
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
        elevation={2}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <Link href="/dashboard" passHref>
          <MenuItem onClick={handleCloseUserMenu}>
            <Typography textAlign="center">Dashboard</Typography>
          </MenuItem>
        </Link>
        <MenuItem onClick={onLogout}>
          <Typography textAlign="center">Déconnexion</Typography>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default UserMenu;
