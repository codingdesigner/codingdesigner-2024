import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {AnnotatedCard} from './AnnotatedCard';

const meta: Meta<typeof AnnotatedCard> = {
  component: AnnotatedCard,
};

export default meta;

type Story = StoryObj<typeof AnnotatedCard>;

export const Basic: Story = {args: {}};
