import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {LayoutColumns, Column} from './LayoutColumns';

const meta: Meta<typeof LayoutColumns> = {
  component: LayoutColumns,
};

export default meta;

type Story = StoryObj<typeof LayoutColumns>;

export const Basic: Story = {args: {}};
