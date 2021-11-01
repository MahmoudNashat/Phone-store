import styled from "styled-components";

export const ButtonContainer = styled.button`
background-color: transparent;
border: 1px solid var(--lightBlue);
border-color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
padding: 3px 10px;
color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
border-radius: 5px; 
transition: all .2s ease-in-out;
text-transform: capitalize;
&:hover {
    background-color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: var(--mainBlue)
}
`