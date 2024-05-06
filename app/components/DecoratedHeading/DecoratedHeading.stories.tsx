import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {DecoratedHeading} from './DecoratedHeading';

const meta: Meta<typeof DecoratedHeading> = {
  title: 'Utilities/DecoratedHeading',
  component: DecoratedHeading,
  parameters: {
    as: 'h1',
    background: 'page',
    text: 'page-text',
    shadow: 'pink',
  }
};

export default meta;

type Story = StoryObj<typeof DecoratedHeading>;

export const Base: Story = {args: {children: "Gwendy Wendell - The Coding Designer"}};
