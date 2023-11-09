import type { Meta, StoryObj } from "@storybook/react";

import { Collapsible } from "software-edv-design-system/components";

const meta = {
  title: "Components/Collapsible",
  component: () => (
    <Collapsible.Root>
      <></>
    </Collapsible.Root>
  ),
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof Collapsible>;

export const Default: Story = {};
