import { Navigation } from "./Navigation"
import { select, withKnobs, array } from "@storybook/addon-knobs"

import knobsData from "./navigation.knobs.json"

export default {
  title: "Molecules/Nav Bar",
  component: Navigation,
  decorators: [withKnobs],
}

const { direction, items } = knobsData

export const horizontalDirection = (args) => (
  <Navigation
    direction={select(
      direction.label,
      direction.options,
      direction.default,
      direction.group
    )}
    items={array(items.label, items.default, items.group)}
  />
)
export const verticalDirection = (args) => (
  <Navigation
    direction={select(
      direction.label,
      direction.options,
      "vertical",
      direction.group
    )}
    items={array(items.label, items.default, items.group)}
  />
)
