import styled from 'styled-components'


const buttonBackground = props => {
  if(!props.variant) return props.theme.primary
  let color;
  switch (props.variant) {
    case 'primary':
      color = props.theme.primary
      break;
    case 'secondary':
      color = props.theme.secondary
      break;
    case 'tertiary':
      color = props.theme.tertiary
      break;
    default: 
      color = props.theme.primary
      break;
    }
    return color;
}

const StyledButton = styled.button`
padding: 16px;
background-color: ${props => buttonBackground(props)};
border: none;
box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0,0,0, 0.01);
color: pointer;
font-weight: 700;
line-height: 1;
outline: none;
text-decoration: none;
transition: all 0.15s ease;
white-space: nowrap;
border-radius: 5px;
display: inline-flex;
align-items: center;
justify-content: center;
.button__icon{
  display: inline-block;
  margin-right: 4px;

`

export const StyledLinkedButton = styled(StyledButton).attrs({as: "a"})`
background-color: lightblue;
display: inline-flex;
align-items: center;
justify-content: center;
.button__icon{
  display: inline-block;
  margin-right: 4px;
}
`


export default StyledButton
