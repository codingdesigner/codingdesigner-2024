import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {header} from './header';

const meta: Meta<typeof header> = {
  component: header,
};

export default meta;

type Story = StoryObj<typeof header>;

export const Basic: Story = {args: {}};
