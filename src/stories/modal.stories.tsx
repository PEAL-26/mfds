import type { Meta, StoryObj } from "@storybook/react";

import { Modal } from "software-edv-design-system/components";

const meta = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {};
