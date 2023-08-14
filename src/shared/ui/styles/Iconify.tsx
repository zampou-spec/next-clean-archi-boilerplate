import { Icon, IconifyIcon } from '@iconify/react';
import { Box, BoxProps } from '@mui/material';

type IconifyProps = {
  icon: IconifyIcon | string;
} & BoxProps;

export const Iconify = ({ icon, ...props }: IconifyProps) => {
  return <Box component={Icon} icon={icon} {...props} />;
};

export default Iconify;
