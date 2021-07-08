import { text, withKnobs } from "@storybook/addon-knobs"

import knobsData from "./link.knobs.json"

export default {
  title: "Atoms/Link",
  decorators: [withKnobs],
}

const { innerText } = knobsData

export const basicButton = (args) => (
  <a href="#">{text(innerText.label, innerText.default, innerText.group)}</a>
)
