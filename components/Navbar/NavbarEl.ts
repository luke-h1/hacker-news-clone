import styled from 'styled-components';

export const Nav = styled.nav`
 background: #f60;
 width: 800px;
 margin: 0 auto;
 padding: 1rem;     
 > * { 
     display: inline-block;
     color: #000;
 }   
 a { 
     text-decoration: none;
 }
`

export const BackBtn = styled.span`
    font-size: 0.9rem;
    padding-right: 1rem;
    cursor: pointer;
`

export const NavTitle = styled.span`
    font-weight: bold;
`