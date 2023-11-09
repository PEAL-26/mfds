import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "software-edv-design-system/components";

const meta = {
  title: "Components/Button",
  component: Button.Root,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    children: "Botao",
  },
  argTypes: {
    variant: {
      options: ["primary", "secondary", "error", "success", "none"],
      defaultValue: "primary",
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof Button.Root>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Variants: Story = {
  args: {},
};
