import type { Meta, StoryObj } from "@storybook/react";

import { LabelDescription } from "software-edv-design-system/components";

const meta = {
  title: "Components/LabelDescription",
  component: LabelDescription,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof LabelDescription>;

export default meta;
type Story = StoryObj<typeof LabelDescription>;

export const Default: Story = {};
