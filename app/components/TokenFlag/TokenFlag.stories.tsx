import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {TokenFlag, TokenMarker} from './TokenFlag';

const meta: Meta<typeof TokenFlag> = {
  component: TokenFlag,
  render: (args) => (
    <React.Fragment>
      <TokenMarker {...args}/>
      <TokenFlag {...args}/>
    </React.Fragment>
  )
};

export default meta;

type Story = StoryObj<typeof TokenFlag>;

export const Basic: Story = {args: { type: 'type', footnote: '1' }};
