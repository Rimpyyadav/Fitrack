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
const NavLogo = styled(LinkR)`
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
    list-style: none;
`;
const NavLink = styled(LinkR)`
display: flex;
align-items: center;
color: ${({ theme }) => theme.text_primary}
font-weight: 500; 
cursior: pointer;
transition: all ls slide-in;
text-decoration: none;
&:hover {
    color: ${({ theme }) => theme.priamry};
}
    &.active {
    color: ${({ theme }) => theme.next_primary }
    }
`;

const MobileMenu = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 16px;
    padding: 0 6px;
    list-style: none;
    width: 90%;
    padding: 12px 40px 24px 40px;
    background: ${({ theme }) => theme.card_light}
    position: absolute;


`;



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

        <MobileMenu>
        <NavLink to="/" >Dashboard</NavLink>
        <NavLink to="/workouts" >Workout</NavLink>
        <NavLink to="/tutorials" >Tutorials</NavLink>
        <NavLink to="/blogs" >Blogs</NavLink>
        <NavLink to="/contact" >Contact</NavLink>
        </MobileMenu>

    <NavItems>
        <NavLink to="/" >Dashboard</NavLink>
        <NavLink to="/workouts" >Workout</NavLink>
        <NavLink to="/tutorials" >Tutorials</NavLink>
        <NavLink to="/blogs" >Blogs</NavLink>
        <NavLink to="/contact" >Contact</NavLink>
    </NavItems>

    </NavContainer>
   </Nav>

  )
}

export default Navbar