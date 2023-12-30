import NucampLogo from '../app/assets/img/logo.png';
import { useState } from 'react';
import { 
    Navbar,
    NavbarBrand,
    Collapse,
    Nav, 
    NavItem,
    NavbarToggler
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

//add to github to get help 


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return(
        <div className="App">
        <Navbar dark color='primary' sticky='top' expand='md'>
        <NavbarBrand className='ms-5' href='/'>
            <img src={NucampLogo} alt='nucamp logo' className='float-start' />
            <h1 className='mt-1'>Nucamp</h1>
        </NavbarBrand>

        <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />

        <Collapse isOpen={menuOpen} navbar>

            <Nav className='ms-auto' navbar>
                <NavItem>
                    < NavLink className='nav-link' to='/'>

                    </NavLink>
                </NavItem>
                <NavItem>
                    < NavLink className='nav-link' to='/directory'>
                        <i className='fa fa-list fa-lg' /> Directory
                    </NavLink>
                </NavItem>
                <NavItem>
                    < NavLink className='nav-link' to='/about'>
                        <i className='fa fa-info fa-lg' /> About
                    </NavLink>
                </NavItem>
                <NavItem>
                    < NavLink className='nav-link' to='/contact'>
                        <i className='fa fa-address-card fa-lg' /> Contact
                    </NavLink>
                </NavItem>
            </Nav>
            
        </Collapse>
        </Navbar>
        </div>
    );
}

export default Header;