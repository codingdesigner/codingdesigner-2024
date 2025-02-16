import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {Recharts} from './Recharts';

const meta: Meta<typeof Recharts> = {
  component: Recharts,
};

export default meta;

type Story = StoryObj<typeof Recharts>;

export const Basic: Story = {args: {}};
