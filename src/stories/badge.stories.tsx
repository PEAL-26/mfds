import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "software-edv-design-system/components";
type Story = StoryObj<typeof Badge>;

const meta = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    variant: "info",
  },
} satisfies Meta<typeof Badge>;

export default meta;

export const Variants: Story = {
  args: {
    variant: "error",
    children: "Error",
  },
};

export const Warn: Story = {
  args: {
    variant: "warn",
    children: "Warn",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    children: "Error",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    children: "Sucesso",
  },
};

export const Info: Story = {
  args: {
    variant: "info",
    children: "Info",
  },
};
