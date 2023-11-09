import type { Meta, StoryObj } from "@storybook/react";

import { Image } from "software-edv-design-system/components";

const meta = {
  title: "Components/Image",
  component: Image,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {};
