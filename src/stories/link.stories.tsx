import type { Meta, StoryObj } from "@storybook/react";

import { Link } from "software-edv-design-system/components";

const meta = {
  title: "Components/Link",
  component: Link,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {};
