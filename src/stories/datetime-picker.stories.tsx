import type { Meta, StoryObj } from "@storybook/react";

import { DateTimePicker } from "software-edv-design-system/components";

const meta = {
  title: "Components/DateTimePicker",
  component: DateTimePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof DateTimePicker>;

export default meta;
type Story = StoryObj<typeof DateTimePicker>;

export const Default: Story = {};
