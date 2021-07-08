import { Button } from "./Poked"
import { text, select, withKnobs } from "@storybook/addon-knobs"

import knobsData from "./button.knobs.json"
import { withDesign } from "storybook-addon-designs"

export default {
  title: "Atoms/Button",
  component: Button,
  decorators: [withKnobs, withDesign],
}

const { icon, innerText } = knobsData

const Template = (args) => (
  <Button variant="secondary">
    {text(innerText.label, innerText.default, innerText.group)}
  </Button>
)

export const basicButton = (args) => (
  <Button variant="tertiary" onClick={() => alert("hello")}>
    {text(innerText.label, innerText.default, innerText.group)}
  </Button>
)
export const iconButton = (args) => (
  <Button
    icon={select(icon.label, icon.options, icon.default, icon.group)}
    variant="tertiary"
  >
    {text(innerText.label, innerText.default, innerText.group)}
  </Button>
)
export const linkedButton = (args) => (
  <Button variant="primary" href="/">
    Linked Button
  </Button>
)
export const Default = Template.bind({})
