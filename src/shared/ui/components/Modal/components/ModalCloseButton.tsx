import callAll from '~/shared/utils/callAll';
import { useModalContext } from '../context/useModal';
import { ReactElement, Children, cloneElement } from 'react';

type ModalCloseButtonProps = {
  children: ReactElement;
};

function ModalCloseButton({ children: child }: ModalCloseButtonProps) {
  const [, setIsOpen] = useModalContext();

  return Children.only(
    cloneElement(child, {
      onClick: callAll(() => setIsOpen(false), child.props.onClick),
      title: 'Fermer'
    })
  );
}

export { ModalCloseButton };
