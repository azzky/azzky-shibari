import React from "react"
import { Link } from "gatsby"
import { menuItems } from '../../../constants'
import {
    Nav,
    Hamburger,
    HamburgerSpan,
    MenuList,
    MenuUl,
    MenuItem,
    MenuLabel
} from './styled'

const Navigation = (props) => {
    const {
        active,
        toggleMenu,
        langStr,
        lang,
    } = props

    return (
        <Nav>
            <Hamburger type="button"
                       aria-controls="menu__list"
                       aria-expanded={active}
                       aria-label="menu button"
                       onClick={() => toggleMenu((prev) => !prev)}>
                <HamburgerSpan active={active}/>
                <HamburgerSpan active={active}/>
                <HamburgerSpan active={active}/>
            </Hamburger>
            <MenuList id="menu__list"
                      active={active}>
                <MenuUl // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
                        role="menu">
                {menuItems.map((el, i) => (
                    <MenuItem key={i}
                              role="none">
                        <Link to={langStr + el.link}
                              activeClassName="active"
                              role="menuitem">
                            <svg width="24" height="24">
                                <use href={`#${el.name}`}/>
                            </svg>
                            <MenuLabel>
                                {lang === 'ru' ? el.runame :el.name}
                            </MenuLabel>
                        </Link>
                    </MenuItem>
                ))}
                </MenuUl>
            </MenuList>
      </Nav>
    )
}

export default Navigation