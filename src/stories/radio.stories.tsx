import type { Meta, StoryObj } from "@storybook/react";

import { Radio } from "software-edv-design-system/components";

const meta = {
  title: "Components/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {};
