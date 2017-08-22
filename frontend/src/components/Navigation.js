import React, {Component} from 'react';
import {Navbar} from 'react-bootstrap';
import {Link} from 'react-scroll';
import Radium from 'radium';
import MdCloud from 'react-icons/lib/md/cloud-queue';

class Navigation extends Component {
    componentDidMount(){
        window.addEventListener('scroll',function(){
            let navbar = document.querySelector('nav.navbar');
            if(window.pageYOffset){
                Object.assign(navbar.style,{
                    background: 'white',
                    color: 'rgb(14, 65, 147)'
                })
            } else {
                Object.assign(navbar.style,{
                    background: 'transparent',
                    color: 'white'
                })
            }
        });
    }
    render(){
        return (
            <Navbar style={s.navbar}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link activeClass="active" smooth={true} duration={500} to="home" style={s.link}>
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
                            <Link activeClass="active" smooth={true} duration={500} to="about" style={s.link}>
                                About
                            </Link>
                        </li>
                        <li style={s.li}>
                            <Link activeClass="active" smooth={true} duration={500} to="contact" style={s.link}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </Navbar.Collapse>
            </Navbar>
        )
    };
}

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
        transition: 'all .2s ease-out',
        zIndex: 10
    },
    navbarTheme: {
        background: 'transparent',
        color: 'white'
    },
    navbarThemeFixed: {
        background: 'white',
        color: 'rgb(14, 65, 147)'
    },
    ul: {
        alignItems: 'center',
        display: 'flex',
        float: 'right',
        height: 60,
        listStyleType: 'none',
        margin: 0,
        padding: 0
    },
    li: {
        display: 'inline-block',
    },
    link: {
        color: 'inherit',
        cursor: 'pointer',
        display: 'inline-block',
        fontSize: 16,
        fontWeight: 'bold',
        height: 'auto',
        padding: '10px 20px',
        ':hover': {
            textDecoration: 'none !important'
        }
    },
    logo: {
        fontSize: 40
    },

}

export default Radium(Navigation);
