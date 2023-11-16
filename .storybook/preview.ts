import type { Preview } from '@storybook/web-components';
import {defineCustomElements} from '../loader';
import { customViewports } from './viewports';

defineCustomElements();

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: customViewports
    }
  },
};

export default preview;
