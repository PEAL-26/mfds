import type { Meta, StoryObj } from "@storybook/react";

import { Dropdown } from "software-edv-design-system/components";

const meta = {
  title: "Components/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {};
