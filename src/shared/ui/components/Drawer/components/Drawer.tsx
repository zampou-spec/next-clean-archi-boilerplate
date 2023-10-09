import callAll from '~/shared/utils/callAll';
import { useDrawerContext } from '../context/useDrawer';
import { Drawer as DrawerLayout, DrawerProps } from '@mui/material';

const Drawer = ({ children, onClose, ...props }: DrawerProps) => {
  const [open, setIsOpen] = useDrawerContext();

  return (
    <DrawerLayout
      open={open}
      onClose={callAll(
        () => setIsOpen(false),
        () => onClose
      )}
      {...props}
    >
      {children}
    </DrawerLayout>
  );
};

export { Drawer };
