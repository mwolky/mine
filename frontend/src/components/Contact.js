import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Radium from 'radium';
import cracow from '../assets/cracow.jpg';
import face from '../assets/face.jpg'

const Contact = () => {
    return (
        <div style={s.banner}>
            <Grid>
                <Row>
                    <Col xs={6}>
                        <div>
                            <p style={[s.p,s.desc]}>
                                I live, <br/>work and play <br/>in Cracow.
                            </p>
                        </div>
                    </Col>
                    <Col xs={6}>
                        <div>
                            <p style={s.p}>
                                <img src={face} style={s.face} alt=""/>
                            </p>
                        </div>
                    </Col>
                    <Col xs={12}>
                        <div>
                            <p style={[s.p,s.mail]}>
                                marci.mazur@gmail.com
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
        backgroundImage: `url("${cracow}")`,
        backgroundSize: 'cover',
        minHeight: '100vh',
        padding: '80px 0'
    },
    desc:{
        fontSize: 60,
        paddingBottom: 50
    },
    face: {
        borderRadius: '50%',
        height: 'auto',
        width: 200
    },
    mail: {
        borderTop: '1px solid white',
        fontSize: 40,
        paddingTop: 20
    },
    p: {
        color: 'white',
        margin: 0
    }
}

export default Radium(Contact);