import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {LogoGrid} from './logo-grid';

const meta: Meta<typeof LogoGrid> = {
  title: 'Portfolio/LogoGrid',
  component: LogoGrid,
};

export default meta;

type Story = StoryObj<typeof LogoGrid>;

export const Basic: Story = {args: {}};
