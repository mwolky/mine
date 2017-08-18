import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {Link} from 'react-scroll';
import Radium from 'radium';
import { fadeInDown } from 'react-animations';
import sky from '../assets/sky.jpg';
import MdArrowDownward from 'react-icons/lib/md/arrow-downward';

const Home = () => {
    return (
        <Grid fluid style={s.grid}>
            <Row>
                <Col xs={12} style={s.col}>
                    <div style={s.banner}>
                        <h1 style={s.heading}>
                            Welcome to Web Heaven!
                        </h1>
                        <h2 style={s.subheading}>
                            web design & development
                        </h2>
                        <div style={s.hint}>
                            <Link smooth={true} duration={500} to="about" style={s.link}>
                                <MdArrowDownward  style={s.arrow}/>
                            </Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </Grid>
    );
};

const s = {
    arrow: {
        fontSize: 38,
    },
    banner: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        justifyContent: 'center',
        position: 'relative'
    },
    col: {
        color: 'white',
    },
    grid: {
        backgroundImage: `url("${sky}")`,
        backgroundSize: 'cover',
    },
    heading: {
        fontSize: 60,
        fontWeight: 700,
        margin: 0,
        padding: '80px 0 50px',
        textAlign: 'center',
    },
    hint: {
        animation: 'xe 1.5s ease-out infinite',
        animationName: Radium.keyframes(fadeInDown, 'fadeInDown'),
        textAlign: 'center'
    },
    link: {
        color: 'white',
        cursor: 'pointer',
        outline: 'none',
        ':hover': {
            textDecoration: 'none'
        }
    },
    subheading: {
        fontFamily: '"Dancing Script", cursive',
        fontSize: 40,
        margin: 0,
        padding: '30px 0 80px',
        textAlign: 'center'
    }
}

export default Radium(Home);