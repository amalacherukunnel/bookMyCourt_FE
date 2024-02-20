import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon
} from 'mdb-react-ui-kit';
import { useSelector } from 'react-redux';
import store from '../../toolkit/store';

function MainNavBar() {
  const [openNav, setOpenNav] = useState(false);

  const { user } = useSelector((store) => store.user);

  return (
    <MDBNavbar expand='lg' light bgColor='primary'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>BookMyCourt</MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenNav(!openNav)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar open={openNav}>
          <MDBNavbarNav>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/addNewCourt'>AddNewCourt</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>My Bookings</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                Disabled
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
          <span>{user.name}</span>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default MainNavBar;
