import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ParagraphWrapper } from './ParagraphWrapper';

const StoryContent = () => {
  return (
    <React.Fragment>
      <p>This design system offers a comprehensive suite of tokens for typography, color themes, and decorative elements, providing unmatched versatility and customization options.</p>

      <p><strong>Color tokens</strong> are meticulously crafted to enable effortless custom coloring of every design element, ensuring a harmonious visual experience without overwhelming users with an abundance of options.</p>

      <p><strong>Typography tokens</strong> are thoughtfully designed to strike the perfect balance between creativity and performance. Through meticulous analysis, I've developed a responsive text system that empowers designers with precise control over their typographic choices.</p>

      <p>And the <strong>decoration tokens</strong> feature is a unique addition to this system that allows for the fine-tuning of decorative elements such as border radius and line styles. From customizing badges and borders to uploading bespoke assets for backgrounds, this innovative feature adds an extra layer of creativity to our brand sites.</p>
    </React.Fragment>
  )
}

const meta: Meta<typeof ParagraphWrapper> = {
  component: ParagraphWrapper,
  render: (args) => (<ParagraphWrapper {...args}><StoryContent /></ParagraphWrapper>),
};

export default meta;

type Story = StoryObj<typeof ParagraphWrapper>;

export const Basic: Story = { args: {} };
