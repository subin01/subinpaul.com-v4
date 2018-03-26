import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from '../components/atoms/Button';
import Input  from '../components/atoms/Input';


import { Welcome } from '@storybook/react/demo';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('Normal',   () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('Disabled', () => <Button onClick={action('clicked')} disabled={true}>Disabled</Button>);

  storiesOf('Input', module)
  .add('Default', () => <Input onClick={action('clicked')} placeholder="Placeholder text">Disabled</Input>);