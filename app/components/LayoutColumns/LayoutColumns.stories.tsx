import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

// Import a helper component that likely provides data or configuration for the LayoutColumns component
import { LayoutColumnsStoryData } from './LayoutColumnsStoryData';

import { LayoutColumns } from './LayoutColumns';

// Define metadata for the LayoutColumns component to use with Storybook
const meta: Meta<typeof LayoutColumns> = {
  title: 'Layout/LayoutColumns',  // Set a title for this group of stories in Storybook
  component: LayoutColumns,       // Specify the component that this metadata applies to
  argTypes: {                     // Define arguments (props) that can be passed to the component in Storybook
    count: {                      // 'count' prop configuration
      control: {                  // Define the UI control for this prop in Storybook
        type: 'number',           // Use a numeric input
        min: 0,                   // Minimum value
        max: 6,                   // Maximum value
        step: 1,                  // Step size for the control
      },
      name: 'How many columns:',  // Friendly name for the control
      description: 'How many columns: ',  // Description for the control
    },
  },
  render: (args) => (
    <LayoutColumns {...args}><LayoutColumnsStoryData count={args.count}/></LayoutColumns>
  )
};

export default meta;

type Story = StoryObj<typeof LayoutColumns>;

// Define a basic story with default args
export const Basic: Story = {
  args: { count: 2 }  // Set the default number of columns to 2
};
