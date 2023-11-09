import type { Meta, StoryObj } from "@storybook/react";

import { UploadFileSelector } from "software-edv-design-system/components";

const meta = {
  title: "Components/UploadFileSelector",
  component: UploadFileSelector,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof UploadFileSelector>;

export default meta;
type Story = StoryObj<typeof UploadFileSelector>;

export const Default: Story = {};
