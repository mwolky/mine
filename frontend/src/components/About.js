import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Radium from 'radium';
import MdCode from 'react-icons/lib/md/code';
import MdPencil from 'react-icons/lib/md/mode-edit';
import MdLandscape from 'react-icons/lib/md/landscape';
import MdLaptop from 'react-icons/lib/md/laptop';

import face from '../assets/face.jpg';

const About = () => {
    return (
        <div style={s.banner}>
            <Grid style={s.grid}>
                <Row>
                    <Col xs={12}>
                        <div style={s.intro}>
                            <p style={s.p}>
                                Hi! I'm Marcin. I'm an experienced web designer and frontend developer.
                            </p>
                            <p style={s.p}>
                                I propose to my clients following services:
                            </p>
                        </div>
                    </Col>
                </Row>
            </Grid>
            <Grid>
                <Row>
                    <Col xs={12} style={s.heading}>
                        Design
                    </Col>
                </Row>
                <Row>
                    <Col xs={5} xsOffset={1} style={s.borderRight}>
                        <div style={s.col}>
                            <p style={s.p}>
                                <MdPencil style={s.icons}/>
                            </p>
                            <h3 style={s.subheading}>Banners, logos, newsletters</h3>
                            <p style={[s.p,s.price]}>
                                <span style={s.start}>from</span>30<span style={s.currency}>&euro;</span>
                            </p>
                            <p style={[s.p,s.desc]}>
                                Logo for your company.<br/>
                                Creative ad banner.<br/>
                                Newletter design for email campaigns.<br/>
                            </p>
                        </div>
                    </Col>
                    <Col xs={5}>
                        <div style={s.col}>
                            <p style={s.p}>
                                <MdLandscape style={s.icons}/>
                            </p>
                            <h3 style={s.subheading}>Landing pages, web applications</h3>
                            <p style={[s.p,s.price]}>
                                <span style={s.start}>from</span>50<span style={s.currency}>&euro;</span>
                            </p>
                            <p style={[s.p,s.desc]}>
                                Images for your website.<br/>
                                Eye catching landing page.<br/>
                                Exceptional web design.<br/>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Grid>
            <Grid>
                <Row>
                    <Col xs={12} style={s.heading}>
                        Development
                    </Col>
                </Row>
                <Row>    
                    <Col xs={5} xsOffset={1} style={s.borderRight}>
                        <div style={s.col}>
                            <p style={s.p}>
                                <MdLaptop style={s.icons}/>
                            </p>
                            <h3 style={s.subheading}>Code Integration</h3>
                            <p style={[s.p,s.price]}>
                                <span style={s.start}>from</span>25<span style={s.currency}>&euro;</span>
                            </p>
                            <p style={[s.p,s.desc]}>
                                PSD to HTML conversion of artworks.<br/>
                                Pixel perfect desktop and mobile LP.<br/>
                                Responsive email working in Outlook.<br/>
                                Animated HTML5 banner for Google Adwords.<br/> 
                            </p>
                        </div>
                    </Col>
                    <Col xs={5}>
                        <div style={s.col}>
                            <p style={s.p}>
                                <MdCode style={s.icons}/>
                            </p>
                            <h3 style={s.subheading}>Application Development</h3>
                            <p style={[s.p,s.price]}>
                                <span style={s.start}>from</span>100<span style={s.currency}>&euro;</span>
                            </p>
                            <p style={[s.p,s.desc]}>
                                Single Page Application in React.<br/>
                                Create frontend for your application.<br/>
                                Building website in Wordpress.<br/>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
};

const s = {
    banner: {
        minHeight: '100vh',
        padding: '80px 0'
    },
    borderRight: {
        borderRight: '1px solid rgb(216, 226, 234)'
    },
    col: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column'
    },
    currency: {
        fontSize: 27,
        verticalAlign: 'super'
    },
    desc: {
        color: 'rgb(103,120,137)',
        display: 'inline-flex',
        fontSize: 16,
        maxWidth: '80%',
        textAlign: 'left'
    },
    face: {
        backgroundImage: `url("${face}")`,
        backgroundSize: 'cover',
        borderRadius: '50%',
        height: 200,
        margin: '20px auto',
        width: 200
    },
    grid: {
    },
    heading: {
        fontSize: 40,
        fontWeight: 300,
        margin: '40px 0 20px',
        textAlign: 'center'
    },
    icons: {
        color: 'rgb(103,120,137)',
        fontSize: 50
    },
    intro: {
    },
    p: {
        fontSize: 20,
        margin: 0,
        textAlign: 'center'
    },
    price: {
        color: 'rgb(103,120,137)',
        fontSize: 72,
        fontWeight: 300
    },
    start: {
        fontSize: 27
    },
    subheading: {
        color: 'rgb(38,42,45)',
        fontSize: 15,
        fontWeight: 700,
        margin: '30px 0 0',
        textTransform: 'uppercase'
    }
};

export default Radium(About);