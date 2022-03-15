import React, { useState } from 'react'
import { NavButton } from './styles/Button.styled'
import { NavLinks, NavWrapper,Toggle } from './styles/NavBar.styled'
const NavBar = () => {
  const [isClicked,setIsClicked]=useState(false)
  return (
    <NavWrapper>
      <nav>
        <a href="#"><img src="images/logo.svg" alt="logo" /></a>
        <NavLinks variant={isClicked? 'active':''}>
          <ul>
            <li>how we work</li>
            <li>blog</li>
            <li>account</li>
            <NavButton>view plans</NavButton>
          </ul>
        </NavLinks>
        <Toggle onClick={()=>setIsClicked(!isClicked)}><img src={isClicked?"images/icon-close.svg":"images/icon-hamburger.svg"} alt="toggle" /></Toggle>
      </nav>
    </NavWrapper>
  )
}

export default NavBar