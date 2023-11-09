import type { Meta, StoryObj } from "@storybook/react";

import { Loading } from "software-edv-design-system/components";

const meta = {
  title: "Components/Loading",
  component: Loading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof Loading>;

export const Default: Story = {};
