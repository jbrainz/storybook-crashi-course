import { Button } from "./Poked"

export default {
  title: "Button",
  component: Button,
}
const Template = (args) => <Button variant="secondary">Hello Button</Button>

export const basicButton = (args) => (
  <Button variant="tertiary" onClick={() => alert("hello")}>
    {" "}
    Click Caller
  </Button>
)
export const iconButton = (args) => (
  <Button icon="user" variant="tertiary">
    User Icon
  </Button>
)
export const linkedButton = (args) => (
  <Button variant="primary" href="/">
    Linked Button
  </Button>
)
export const Default = Template.bind({})
