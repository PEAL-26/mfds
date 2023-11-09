import type { Meta, StoryObj } from "@storybook/react";

import { Pagination } from "software-edv-design-system/components";

const meta = {
  title: "Components/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {};
