import type { Meta, StoryObj } from "@storybook/react";

import { SkeletonTabela } from "software-edv-design-system/components";

const meta = {
  title: "Components/SkeletonTabela",
  component: SkeletonTabela,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof SkeletonTabela>;

export default meta;
type Story = StoryObj<typeof SkeletonTabela>;

export const Default: Story = {};
