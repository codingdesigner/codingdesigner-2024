// import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {Menu} from './menu';

const meta: Meta<typeof Menu> = {
  title: 'Menu',
  tags: ['autodocs'],
  component: Menu,
};

export default meta;

type Story = StoryObj<typeof Menu>;

export const Basic: Story = {args: {}};
