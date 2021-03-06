import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Tooltip, OverlayTrigger } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import { useTheme } from '../../contexts/ThemeContext'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

export default function Header() {
    const { currentUser } = useAuth()
    const { changeTheme, themeNumber, themes, themeBGs, themeTexts, themeVariants, themeName, themeBackground, themeText, themeVariant } = useTheme();

    const loginPopover = (
        <Tooltip id="popover-basic">
            you must <strong>login</strong> to upload a question
        </Tooltip>
    )

    return (
        <Navbar bg={themeVariant} variant="dark" expand="sm">
            <Navbar.Brand style={{ marginLeft: '10px', color: themeBackground }}><Link style={{color: themeBackground, textDecoration: 'none'}} to="/">envirothon.study</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                {currentUser ? 
                    <Nav.Link style={{ color: themeBackground }}><Link style={{ color: themeBackground, textDecoration: 'none' }} to="/upload">upload a question</Link></Nav.Link>
                    :
                    <OverlayTrigger trigger="click" placement="bottom" overlay={loginPopover}>
                        <Nav.Link style={{ color: themeBackground }}>upload a question</Nav.Link>
                    </OverlayTrigger>
            }
            <NavDropdown id="basic-nav-dropdown" variant="success" className="justify-content-end" title={<span style={{color: themeBackground}}>event</span>}>
                    <NavDropdown.Item id="dropdown-link" href="#aquatics"><Link style={{color: '#53C0EB', textDecoration: 'none'}} to="/aquatics">Aquatics</Link></NavDropdown.Item>
                    <NavDropdown.Item id="dropdown-link" href="#forestry"><Link style={{color: '#B7C132', textDecoration: 'none'}} to="/forestry">Forestry</Link></NavDropdown.Item>
                    <NavDropdown.Item id="dropdown-link" href="#general"><Link style={{color: '#4BBC96', textDecoration: 'none'}} to="/general">General</Link></NavDropdown.Item>
                    <NavDropdown.Item id="dropdown-link" href="#soils"><Link style={{color: '#A78967', textDecoration: 'none'}} to="/soils">Soils</Link></NavDropdown.Item>
                    <NavDropdown.Item id="dropdown-link" href="#wildlife"><Link style={{color: '#9ACA42', textDecoration: 'none'}} to="/wildlife">Wildlife</Link></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown id="basic-nav-dropdown" variant="success" className="justify-content-end" style={{marginRight: '30px', width: '80px'}} title={<span style={{color: themeBackground}}>{themeName}</span>}>
                {themes.map((t, key) => {
                    if (key != themeNumber) {
                        return <NavDropdown.Item onClick={() => changeTheme(key)} style={{color: themeTexts[key], backgroundColor: themeBGs[key]}}>{t}</NavDropdown.Item>
                    }
                })}
            </NavDropdown>
            </Navbar.Collapse>
        </Navbar>
    )
}
