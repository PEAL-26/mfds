import type { Meta, StoryObj } from "@storybook/react";

import { Table } from "software-edv-design-system/components";

const meta = {
  title: "Components/Table",
  component: Table,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {};
