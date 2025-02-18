import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {RechartsTest} from './RechartsTest';

const meta: Meta<typeof RechartsTest> = {
  component: RechartsTest,
};

export default meta;

type Story = StoryObj<typeof RechartsTest>;

export const Basic: Story = {args: {}};
