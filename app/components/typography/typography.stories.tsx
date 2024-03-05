import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {typography} from './typography';

const meta: Meta<typeof typography> = {
  component: typography,
};

export default meta;

type Story = StoryObj<typeof typography>;

export const Basic: Story = {args: {}};
