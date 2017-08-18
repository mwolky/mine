import React from 'react';
import {Navbar} from 'react-bootstrap';
import {Link} from 'react-scroll';
import Radium from 'radium';
import MdCloud from 'react-icons/lib/md/cloud-queue';

const Navigation = () => {
    return (
        <Navbar style={s.navbar}>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link smooth={true} duration={500} to="home" style={s.link}>
                        <MdCloud style={s.logo}/>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
                <ul style={s.ul}>
                    <li style={s.li}>
                        <Link activeClass="active" smooth={true} duration={500} to="home" style={s.link}>
                            Home
                        </Link>
                    </li>
                    <li style={s.li}>
                        <Link smooth={true} duration={500} to="about" style={s.link}>
                            About
                        </Link>
                    </li>
                    <li style={s.li}>
                        <Link smooth={true} duration={500} to="contact" style={s.link}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </Navbar.Collapse>
        </Navbar>
    )
};

const s = {
    brand: {
        height: 'auto'
    },
    navbar: {
        background: 'transparent',
        border: 'none',
        borderRadius: 'none',
        color: 'white',
        left: 0,
        marginBottom: 0,
        position: 'fixed',
        right: 0,
        top: 0,
        zIndex: 10
    },
    ul: {
        alignItems: 'center',
        display: 'flex',
        float: 'right',
        height: 70,
        listStyleType: 'none',
        margin: 0,
        padding: 0
    },
    li: {
        display: 'inline-block',
    },
    link: {
        color: 'white',
        cursor: 'pointer',
        fontSize: 20,
        fontWeight: 'bold',
        height: 'auto',
        padding: '15px 20px',
        ':hover': {
            textDecoration: 'none !important'
        }
    },
    logo: {
        fontSize: 50
    },

}

export default Radium(Navigation);
