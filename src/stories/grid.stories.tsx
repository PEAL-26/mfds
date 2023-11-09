import type { Meta, StoryObj } from "@storybook/react";

import { Grid } from "software-edv-design-system/components";

const meta = {
  title: "Components/Grid",
  component: Grid,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof Grid>;

export const Default: Story = {};
