import React from 'react';
import Radium from 'radium';
import {Grid, Row, Col} from 'react-bootstrap';

const Footer = () => {
    return (
      <div style={s.footer}>
          <Grid>
              <Row>
                  <Col xs={12}>
                      <div style={s.container}>
                          <p style={s.p}>Web Heaven</p>
                          <p style={s.p}></p>
                      </div>
                  </Col>
              </Row>
          </Grid>
      </div>
    );
};

const s = {
    container: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    footer: {
        background: 'black',
        color: 'white',
        padding: '40px 0'
    },
    p: {
        fontSize: 16,
        margin: 0
    }
}

export default Radium(Footer);