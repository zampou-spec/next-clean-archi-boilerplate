import TextField from '.';
import type { Meta, StoryFn } from '@storybook/react';

const meta = {
  title: 'components/TextField',
  component: TextField,
  args: {
    fullWidth: false,
    label: 'Username',
    placeholder: 'Type something here',
    helperText: 'this field is mandatory'
  },
  argTypes: {
    label: { control: { type: 'text' } },
    helperText: { control: { type: 'text' } },
    placeholder: { control: { type: 'text' } },

    controlId: { control: { type: 'hidden' } },
    inputLabelProps: { control: { type: 'hidden' } }
  }
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryFn<typeof meta>;

export const Default: Story = {};
