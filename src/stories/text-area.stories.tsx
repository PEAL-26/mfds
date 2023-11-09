import type { Meta, StoryObj } from "@storybook/react";

import { TextArea } from "software-edv-design-system/components";

const meta = {
  title: "Components/TextArea",
  component: TextArea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {};
