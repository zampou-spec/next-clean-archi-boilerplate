import { ReactNode, MouseEventHandler } from 'react';
import { DialogContentProps, DialogProps, DialogTitleProps } from '@mui/material';

export type ModalProps = {
  title?: ReactNode;
  children?: ReactNode;
  width?: string | number;
  contentProps?: DialogContentProps;
  dialogTitleProps?: DialogTitleProps;
  onClose?: MouseEventHandler<HTMLButtonElement>;
} & DialogProps;
