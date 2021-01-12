import { configure, addDecorator } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { withHTML } from '@whitespace/storybook-addon-html/out/decorators/withHTML';
import { defineCustomElements } from '../../../dist/libs/ui-components/loader';

defineCustomElements();

addDecorator(withKnobs);
addDecorator(withNotes);
addDecorator(withHTML);
configure(require.context('../src', true, /\.stories\.(j|t)sx?$/), module);
