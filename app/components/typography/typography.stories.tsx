import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import { Typography } from './typography';
import { textSection } from './story-content/text';
import { embeddedSection } from './story-content/embedded';
import { formsSection } from './story-content/forms';

const meta: Meta<typeof Typography> = {
  title: 'Typography',
  component: Typography,
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Text: Story = {args: {dangerousHTML : textSection}};
export const Embedded: Story = {args: {dangerousHTML : embeddedSection}};
export const Forms: Story = {args: {dangerousHTML : formsSection}};
