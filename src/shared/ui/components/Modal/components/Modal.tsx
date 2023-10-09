import ModalLayout from './ModalLayout';
import { ModalProps } from './Modal.type';
import callAll from '~/shared/utils/callAll';
import { useModalContext } from '../context/useModal';

export function Modal({ onClose, ...props }: Omit<ModalProps, 'open'>) {
  const [open, setIsOpen] = useModalContext();

  return (
    <ModalLayout
      open={open}
      onClose={callAll(
        () => setIsOpen(false),
        () => onClose
      )}
      {...props}
    />
  );
}

export default Modal;
