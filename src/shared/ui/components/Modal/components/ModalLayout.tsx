import { ModalProps } from './Modal.type';
import { alpha } from '@mui/material/styles';
import { Iconify } from '~/shared/ui/components/Iconify';
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';

const ModalLayout = ({ dialogTitleProps, title, children, contentProps, onClose, PaperProps, width, ...props }: ModalProps) => (
  <Dialog
    {...props}
    PaperProps={{
      sx: {
        borderRadius: 2,
        ...PaperProps?.sx,
        width
      },
      ...PaperProps
    }}
  >
    <DialogTitle sx={{ maxInlineSize: '90%' }} variant="body1" fontWeight="bold" {...dialogTitleProps}>
      {title}
      <IconButton
        onClick={onClose}
        aria-label="close"
        size="small"
        sx={{
          position: 'absolute',
          right: 10,
          top: 10,
          color: (theme) => theme.palette.text.primary,
          background: (theme) => alpha(theme.palette.text.primary, 0.05),
          '&:hover': {
            background: (theme) => alpha(theme.palette.common.black, 0.1)
          }
        }}
      >
        <Iconify icon="ic:round-close" />
      </IconButton>
    </DialogTitle>
    <DialogContent {...contentProps}>{children}</DialogContent>
  </Dialog>
);

export default ModalLayout;
