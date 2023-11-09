import type { Meta, StoryObj } from "@storybook/react";

import { Section } from "software-edv-design-system/components";

const meta = {
  title: "Components/Section",
  component: Section,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof Section>;

export const Default: Story = {};
