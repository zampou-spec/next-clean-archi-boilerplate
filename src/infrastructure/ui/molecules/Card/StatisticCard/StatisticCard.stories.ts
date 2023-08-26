import type { Meta, StoryObj } from '@storybook/react';

import StatisticCard from '.';

const meta = {
  title: 'molecules/Card/Statistic Card',
  component: StatisticCard,
  args: {
    title: '100',
    icon: 'mdi:account-check-outline',
    description: "Nombre d'utilisateur"
  },
  argTypes: {
    title: { control: { type: 'text' } },
    description: { control: { type: 'text' } }
  }
} satisfies Meta<typeof StatisticCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
