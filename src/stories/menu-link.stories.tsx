import type { Meta, StoryObj } from "@storybook/react";

import { MenuLink } from "software-edv-design-system/components";

const meta = {
  title: "Components/MenuLink",
  component: MenuLink,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof MenuLink>;

export default meta;
type Story = StoryObj<typeof MenuLink>;

export const Default: Story = {};
