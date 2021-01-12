import { text } from '@storybook/addon-knobs';
import readme from './readme.md';

export default {
  title: 'My Component',
  parameters: {
    notes: { markdown: readme },
  },
};

export const DynamicTest = () => `
  <my-component
    first="${text('first', 'Millie')}"
    middle="${text('middle', 'Bobby')}"
    last="${text('last', 'Brown')}"
    >
  </my-component>
`;
