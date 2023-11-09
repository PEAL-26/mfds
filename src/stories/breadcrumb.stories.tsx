"use client";
import type { Meta, StoryObj } from "@storybook/react";

import { Breadcrumb } from "software-edv-design-system/components";

const meta = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  parameters: {
    layout: "centered",
    backgrounds: {
      values: [
        { name: "red", value: "#f00" },
        { name: "green", value: "#0f0" },
        { name: "blue", value: "#00f" },
      ],
    },
  },
  tags: ["autodocs"],
  args: {
    links: [{ title: "Home", url: "/" }],
  },
  argTypes: {},
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {};
