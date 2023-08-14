import { Meta, StoryFn } from '@storybook/react';
import { Button, DialogContentText } from '@mui/material';

import Modal from './components/Modal';
import { ModalCloseButton } from './components/ModalCloseButton';
import { ModalOpenButton } from './components/ModalOpenButton';
import { ModalProvider } from './context/ModalContext';
import { ModalProps } from './components/Modal.type';

export default {
  title: 'components/Modal',
  component: Modal,
  argTypes: { onClick: { action: 'clicked' } }
} as Meta;

const Template: StoryFn<ModalProps> = (args) => (
  <ModalProvider>
    <Modal {...args} />
    <ModalOpenButton>
      <Button>Click to open</Button>
    </ModalOpenButton>
  </ModalProvider>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Ajouter des collaborateurs sur le dossier',
  children: (
    <>
      <DialogContentText variant="body2">This the modal body</DialogContentText>
      <ModalCloseButton>
        <Button>Click to close</Button>
      </ModalCloseButton>
    </>
  ),
  dialogTitleProps: {},
  contentProps: {}
};

export const OpenModal = Template.bind({});
OpenModal.args = {
  ...Default.args
};
