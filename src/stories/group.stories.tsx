import type { Meta, StoryObj } from "@storybook/react";

import { Group } from "software-edv-design-system/components";

const meta = {
  title: "Components/Group",
  component: Group,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof Group>;

export default meta;
type Story = StoryObj<typeof Group>;

export const Default: Story = {};
