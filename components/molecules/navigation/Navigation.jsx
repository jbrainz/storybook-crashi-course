import PropTypes, { arrayOf, shape, string } from "prop-types"
import StyledNavigation from "./navigation.styles"

export const Navigation = ({ direction, items }) => {
  return (
    <StyledNavigation direction={direction}>
      {items.map((item) => (
        <a href={item.url}>{item.title}</a>
      ))}
    </StyledNavigation>
  )
}

Navigation.PropTypes = {
  direction: string.isRequired,
  items: arrayOf(
    shape({
      title: string.isRequired,
      url: string.isRequired,
    })
  ),
}

Navigation.defaultProps = {
  direction: "horizontal",
  items: [],
}
