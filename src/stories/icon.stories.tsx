import type { Meta, StoryObj } from "@storybook/react";

import { Icon } from "software-edv-design-system/components";

const meta = {
  title: "Components/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {};
