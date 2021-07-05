import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after{
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.00ms !important;
  }
}
html{
  color: black;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 62.65%;
  font-variant-ligatures: none;
  -webkit-font-font-variant-ligatures: none;
  text-rendering: optimizeLegibilty;
  -moz-osx-font-smoothing: grayscale;
  font-smooting: antialiased;
  -webkit-font-smoothing: antialiased;
  text-shadow: rgba(0,0,0,0.01) 0 0 1px;
}
html{
  box-sizing: border-box;
}
*, *:before, *:after{
  box-sizing: inherit;
}
a{
  color: inherit;
  text-decoration: none;
}
.link--icon::after{
  display: none !important;
}
`
export default GlobalStyles
