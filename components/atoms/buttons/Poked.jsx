import PropTypes, { func, node, string } from "prop-types"
import StyledButton, { StyledLinkedButton } from "./poked.styles"

import IconPlus from "../../../assets/images/icons/plus.svg"
import IconShoppingBag from "../../../assets/images/icons/shopping-bag.svg"
import IconShoppingCart from "../../../assets/images/icons/shopping-cart.svg"
import IconUser from "../../../assets/images/icons/user.svg"
import IconClose from "../../../assets/images/icons/x.svg"

const Icons = {
  bag: IconShoppingBag,
  user: IconUser,
  cart: IconShoppingCart,
  close: IconClose,
  plus: IconPlus,
}

export const Button = ({ children, href, onClick, variant, icon }) => {
  if (!href)
    return (
      <StyledButton onClick={onClick} variant={variant}>
        {icon && <IconButton name={icon} />}
       {children}
      </StyledButton>
    )

  return (
    <StyledLinkedButton href={href} variant={variant}>
      {icon && <IconButton name={icon} />}
      {children}
    </StyledLinkedButton>
  )
}

 const IconButton = ({ name }) => {
  if (Icons[name] === undefined) return null
  const Icon = Icons[name]
  return (
    <span className="button__icon">
      <Icon />
    </span> 
  )
}
Button.PropTypes = {
  children: node.isRequired,
  href: string,
  onClick: func,
  variant: string,
  icon: string,
}

ButtonIcon.PropTypes = {
  name: string.isRequired,
}

Button.defaultProps = {
  variant: "primary",
}
