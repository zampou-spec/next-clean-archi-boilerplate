import { DialogContentProps, DialogProps, DialogTitleProps } from '@mui/material';
import { ReactNode } from 'react';

export type ModalProps = {
  title?: ReactNode;
  children?: ReactNode;
  width?: string | number;
  contentProps?: DialogContentProps;
  dialogTitleProps?: DialogTitleProps;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
} & DialogProps;
