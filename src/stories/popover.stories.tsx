import type { Meta, StoryObj } from "@storybook/react";

import { Popover } from "software-edv-design-system/components";

const meta = {
  title: "Components/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {};
