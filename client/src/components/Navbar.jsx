import React from 'react';
import styled from "styled-components"
import { Link as LinkR } from "react-router-dom";
import { MenuRounded } from "@mui/icons-material";
import LogoImg from "../utils/images/Logo.png";

const Nav = styled.div`
background-color: ${({theme}) => theme.bg}
height: 80px;
display:flex;
align-items: center;
justify-content: center;
font-size: 1rem;
position: sticy;
top: 0;
z-index: 10;
color: white;
` 

const NavContainer= styled.div``;
const NavLogo = styled.div(LinkR)`
    width: 100%;
    display: flex;
    align-itema: center;
    gap: 16px;
    padding: 0 6px;
    font-weight: 600;
    font-size: 18px;
    text-decoration: none;
    color: ${({ theme }) => theme.black};

`;
const Logo = styled.img``;
const Mobileicon = styled.div`
    color: ${({ theme }) => theme.text.text_primary}
    display: none;
    @media screen and (max-width: 768px) {
    display: flex;
    align-itms: center
    }
`;

const NavItems = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
    padding: 0 6px;
`;
const Navlink = styled(NavLink)

function Navbar() {
  return (
   <Nav>
    <NavContainer>
        <Mobileicon>
            <MenuRounded sx={{ color: "inherit" }} />
        </Mobileicon>
        <NavLogo to="/">
        <Logo src={LogoImg}/>
        Fitrack
        </NavLogo>
    <NavItems>
        <NavLinks to="/" >Dashboard</NavLinks>
    </NavItems>

    </NavContainer>
   </Nav>

  )
}

export default Navbar