'use client';
import { Box, BoxProps } from '@mui/material';
import { Icon, IconifyIcon } from '@iconify/react';

type IconifyProps = {
  icon: IconifyIcon | string;
} & BoxProps;

export const Iconify = ({ icon, ...props }: IconifyProps) => <Box component={Icon} icon={icon} {...props} />;

export default Iconify;
Iconify.displayName = 'Iconify';
