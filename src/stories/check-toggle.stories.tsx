import type { Meta, StoryObj } from "@storybook/react";

import { CheckToggle } from "software-edv-design-system/components";

const meta = {
  title: "Components/CheckToggle",
  component: CheckToggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof CheckToggle>;

export default meta;
type Story = StoryObj<typeof CheckToggle>;

export const Default: Story = {};
