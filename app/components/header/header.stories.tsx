// import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {Header} from './header';

const meta: Meta<typeof Header> = {
  title: 'UI/Header',
  // tags: ['autodocs'],
  component: Header,
};

export default meta;

type Story = StoryObj<typeof Header>;

export const ComposedHeader: Story = {args: {}};
