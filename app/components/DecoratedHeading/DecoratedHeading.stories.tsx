import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {DecoratedHeading} from './DecoratedHeading';

const meta: Meta<typeof DecoratedHeading> = {
  title: 'Utilities/DecoratedHeading',
  component: DecoratedHeading,
  parameters: {
    as: 'h1',
    recipe: 'pink-bg',
  }
};

export default meta;

type Story = StoryObj<typeof DecoratedHeading>;

export const Base: Story = {args: {children: "Default Content"}};
// export const H2: Story = {args: {as: 'h2', children: "Default Content H2"}};
// export const H3: Story = {args: {as: 'h3', children: "Default Content H3"}};
// export const H4: Story = {args: {as: 'h4', children: "Default Content H4"}};
// export const H5: Story = {args: {as: 'h5', children: "Default Content H5"}};
// export const H6: Story = {args: {as: 'h6', children: "Default Content H6"}};
// export const div: Story = {args: {as: 'div', children: "Default Content div"}};
