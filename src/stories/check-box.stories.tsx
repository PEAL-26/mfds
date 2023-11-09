import type { Meta, StoryObj } from "@storybook/react";

import { CheckBox } from "software-edv-design-system/components";

const meta = {
  title: "Components/CheckBox",
  component: CheckBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof CheckBox>;

export const Default: Story = {};
