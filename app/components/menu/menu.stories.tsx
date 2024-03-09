// import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {Menu} from './menu';

const meta: Meta<typeof Menu> = {
  title: 'UI/Header/Menu',
  // tags: ['autodocs'],
  component: Menu,
};

export default meta;

type Story = StoryObj<typeof Menu>;

export const Alone: Story = {args: {}};
