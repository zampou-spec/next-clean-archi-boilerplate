import { Box, BoxProps } from '@mui/material';
import { Icon, IconifyIcon } from '@iconify/react';

type IconifyProps = {
  icon: IconifyIcon | string;
} & BoxProps;

export const Iconify = ({ icon, ...props }: IconifyProps) => {
  return <Box component={Icon} icon={icon} {...props} />;
};

export default Iconify;
