import styled from 'styled-components'


const StyledNavigation = styled.nav`
padding: 16px;
display: flex;
font-size: 18px;
flex-direction: ${props => props.direction !== "horizontal" ? `column`: undefined};
a + a {
  margin-left: ${props => props.direction === "horizontal" ? `24px`: undefined};
   margin-top: ${props => props.direction !== "horizontal" ? `24px`: undefined};
  
}
`


export default StyledNavigation
