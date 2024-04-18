import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import brandlessCard from "../../static/cards/card-brandless.png"

import {Figure} from './figure';

const meta: Meta<typeof Figure> = {
  title: 'Portfolio/Figure',
  component: Figure,
};

export default meta;

type Story = StoryObj<typeof Figure>;

export const Basic: Story = {
  args: {
    imageFile: brandlessCard,
    altText: "some alt text",
    caption: "A basic caption"
  }
};
