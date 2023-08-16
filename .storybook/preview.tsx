import React from 'react';
import type { Preview } from '@storybook/react';
import RootProvider from '../src/infrastructure/providers';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  decorators: [
    (Story) => (
      <RootProvider>
        <Story />
      </RootProvider>
    )
  ]
};

export default preview;
