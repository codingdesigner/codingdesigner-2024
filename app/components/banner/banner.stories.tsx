import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {Banner} from './banner';

const meta: Meta<typeof Banner> = {
  title: 'UI/Header/Banner',
  component: Banner,
};

export default meta;

type Story = StoryObj<typeof Banner>;

export const Alone: Story = {args: {}};
