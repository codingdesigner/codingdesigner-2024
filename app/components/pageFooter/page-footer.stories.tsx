import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {PageFooter} from './page-footer';

const meta: Meta<typeof PageFooter> = {
  title: 'UI/Footer',
  component: PageFooter,
};

export default meta;

type Story = StoryObj<typeof PageFooter>;

export const Default: Story = {args: {}};
