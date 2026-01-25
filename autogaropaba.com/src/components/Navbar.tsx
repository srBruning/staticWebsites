import React, { useState } from 'react'
import {
  CButton,
  CCollapse,
  CContainer,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
  CNavItem,
  CNavLink,
} from '@coreui/react'

export const Navbar = () => {
  const [visible, setVisible] = useState(false)
  return (
    <CNavbar expand="lg" className="bg-dark" placement="fixed-top" colorScheme="dark">
      <CContainer fluid>
        <CNavbarBrand href="#" >
          <img
            src={"/assets/logo.webp"}
            alt="Bruning Logo"
            width="16"
            height="20" className="d-inline-block align-top"
          />{' '}
          Bruning
        </CNavbarBrand>
        <CNavbarToggler onClick={() => setVisible(!visible)} />
        <CCollapse className="navbar-collapse" visible={visible}>
          <CNavbarNav className="me-auto">
            <CNavItem>
              <CNavLink href="#" active>
                Home
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="#servicos">Serviços</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="#sobre">Sobre</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="#contato">Contato</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="/blog">Blog</CNavLink>
            </CNavItem>
          </CNavbarNav>

        </CCollapse>
      </CContainer>
    </CNavbar >
  )
}
