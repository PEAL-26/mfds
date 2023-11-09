import type { Meta, StoryObj } from "@storybook/react";

import { Separator } from "software-edv-design-system/components";

const meta = {
  title: "Components/Separator",
  component: Separator,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof Separator>;

export const Default: Story = {};
