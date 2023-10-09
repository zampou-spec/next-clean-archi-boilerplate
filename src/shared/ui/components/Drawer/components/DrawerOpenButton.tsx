import callAll from '~/shared/utils/callAll';
import { useDrawerContext } from '../context/useDrawer';
import { ReactElement, Children, cloneElement } from 'react';

type ModalOpenButtonProps = {
  children: ReactElement;
};

const DrawerOpenButton = ({ children: child }: ModalOpenButtonProps) => {
  const [, setIsOpen] = useDrawerContext();

  return Children.only(
    cloneElement(child, {
      onClick: callAll(() => setIsOpen(true), child.props.onClick)
    })
  );
};

export { DrawerOpenButton };
