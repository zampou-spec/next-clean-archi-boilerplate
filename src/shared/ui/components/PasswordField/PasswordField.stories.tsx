import type { Meta, StoryFn } from '@storybook/react';

import PasswordField from '.';

export default {
  title: 'components/PasswordField',
  component: PasswordField
} as Meta<typeof PasswordField>;

const Template: StoryFn<typeof PasswordField> = (args) => <PasswordField {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Username',
  placeholder: 'Type something here',
  helperText: 'this field is mandatory'
};
