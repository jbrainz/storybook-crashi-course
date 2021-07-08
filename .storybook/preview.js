import React from "react"
import { addDecorator } from "@storybook/react"
import { ThemeProvider } from "styled-components"
import { withThemesProvider } from "storybook-addon-styled-component-theme"
import themeDefault from "../components/atoms/particles/themeDefault"
import GlobalStyles from "../components/atoms/particles/globalStyle"
import { addParameters } from "@storybook/react"
import { DocsPage, DocsContainer } from "@storybook/addon-docs"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const GlobalWrapper = (storyFn) => {
  return (
    <ThemeProvider theme={themeDefault}>
      <GlobalStyles />
      {storyFn()}
    </ThemeProvider>
  )
}

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
})

addDecorator(GlobalWrapper)
