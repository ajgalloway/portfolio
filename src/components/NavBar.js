import React, {useState} from 'react';
import {StyleSheet, css} from 'aphrodite';
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse
} from 'reactstrap';


const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen); 

  // TODO: Fix the Navbar formatting to something better
  return (
    <div className={css(styles.nav_bar)}>
      <Navbar dark expand="md">
        <NavbarBrand className={css(styles.brand)} href='/portfolio/#/'>
          <img className={css(styles.brand_logo)}src={require('../media/logos/ag_logo_white.png')} alt="placeholder"></img>
          {/* <p className={css(styles.brand_text)}>Andrew Galloway</p> */}
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href='/portfolio/#/' className={css(styles.link)}>Resume</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/portfolio/#/projects' className={css(styles.link)}>Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='mailto:ajgalloway97@gmail.com' className={css(styles.link)}>Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

    </div>
  )
}

const styles = StyleSheet.create({
  nav_bar: {
    position: 'fixed',
    right: 0,
    left: 0,
    zIndex: 1000,
    backgroundColor: '#150485'
  },
  brand: {
    height: 'auto',
    width: 'auto',
    margin: 0,
    textAlign: 'left'
  },
  brand_logo: {
    height: 50,
    width: 50,
  },
  link: {
    color: 'white'
  }
});



export default NavBar;