import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../components/button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      defaultValue: "primary",
      type: "string",
      description: "",
      name: "",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Variants: Story = {
  args: {
    variant: "primary" || "error" || "secondary" || "success" || "none",
    children: "Button",
  },
};
