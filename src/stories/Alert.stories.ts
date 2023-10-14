import type { Meta, StoryObj } from "@storybook/react";

import { Alert } from "software-edv-design-system/components";

const meta = {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof Alert>;

export const Variants: Story = {
  args: {},
};
