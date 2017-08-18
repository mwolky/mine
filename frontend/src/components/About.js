import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Radium from 'radium';
import MdCode from 'react-icons/lib/md/code';
import MdPencil from 'react-icons/lib/md/mode-edit';
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
                <Row>
                    <Col xs={4}>
                        <div style={s.col}>
                            <p style={s.p}>
                                <MdPencil style={s.icons}/>
                            </p>
                            <h3 style={s.headings}>Design</h3>
                            <p style={[s.p,s.price]}>
                                <span style={s.start}>from</span>50<span style={s.currency}>&euro;</span>
                            </p>
                            <p style={[s.p,s.desc]}>
                                I design websites, logos, banners and newsletters.
                            </p>
                        </div>
                    </Col>
                    <Col xs={4}>
                        <div style={s.col}>
                            <p style={s.p}>
                                <MdLaptop style={s.icons}/>
                            </p>
                            <h3 style={s.headings}>Integration</h3>
                            <p style={[s.p,s.price]}>
                                <span style={s.start}>from</span>50<span style={s.currency}>&euro;</span>
                            </p>
                            <p style={[s.p,s.desc]}>
                                I integrate graphic projects into code.
                            </p>
                        </div>
                    </Col>
                    <Col xs={4}>
                        <div style={s.col}>
                            <p style={s.p}>
                                <MdCode style={s.icons}/>
                            </p>
                            <h3 style={s.headings}>Development</h3>
                            <p style={[s.p,s.price]}>
                                <span style={s.start}>from</span>100<span style={s.currency}>&euro;</span>
                            </p>
                            <p style={[s.p,s.desc]}>
                                I develop web applications.
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
        minHeight: '100vh'
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
        fontSize: 16
    },
    face: {
        backgroundImage: `url("${face}")`,
        backgroundSize: 'cover',
        borderRadius: '50%',
        height: 200,
        margin: '20px auto',
        width: 200
    },
    headings: {
        color: 'rgb(38,42,45)',
        fontSize: 15,
        fontWeight: 700,
        margin: '30px 0 0',
        textTransform: 'uppercase'
    },
    grid: {
        padding: '80px 0'
    },
    icons: {
        color: 'rgb(103,120,137)',
        fontSize: 40
    },
    intro: {
        padding: '0 0 40px'
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
    }
};

export default Radium(About);