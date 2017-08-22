import React from 'react';
import Radium from 'radium';
import {Grid, Row, Col} from 'react-bootstrap';

import ai from '../assets/ai.png';
import psd from '../assets/psd.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import sass from '../assets/sass.png';
import b from '../assets/b.png';
import fz from '../assets/fz.png';
import js from '../assets/js.png';
import jquery from '../assets/jquery.png';
import node from '../assets/node.png';
import react from '../assets/react.png';
import redux from '../assets/redux.png';
import php from '../assets/php.png';
import wp from '../assets/wp.png';
import sf from '../assets/sf.png';
import ubuntu from '../assets/ubuntu.png';
import win from '../assets/win.png';

const imgs = [
    {
        src: ai, 
        alt: 'ai',
        link: 'https://www.adobe.com/pl/products/illustrator.html'
    },
    {
        src: psd, 
        alt: 'psd',
        link: 'https://www.adobe.com/pl/products/photoshop.html'
    },
    {
        src: html, 
        alt: 'html',
        link: 'https://www.w3.org/'
    },
    {
        src: css, 
        alt: 'css',
        link: 'https://www.w3.org/Style/CSS/Overview.en.html'
    },
    {
        src: sass, 
        alt: 'sass',
        link: 'http://sass-lang.com'
    },
    {
        src: b, 
        alt: 'b',
        link: 'http://getbootstrap.com/'
    },
    {
        src: fz, 
        alt: 'fz',
        link: 'http://foundation.zurb.com/'
    },
    {
        src: js, 
        alt: 'js',
        link: 'https://www.javascript.com'
    },
    {
        src: jquery, 
        alt: 'jquery',
        link: 'http://jquery.com/'
    },
    {
        src: node, 
        alt: 'node',
        link: 'https://nodejs.org/en/'
    },
    {
        src: react, 
        alt: 'react',
        link: 'https://facebook.github.io/react/'
    },
    {
        src: redux, 
        alt: 'redux',
        link: 'http://redux.js.org/'
    },
    {
        src: php, 
        alt: 'php',
        link: 'http://php.net/'
    },
    {
        src: wp, 
        alt: 'wp',
        link: 'https://pl.wordpress.org/'
    },
    {
        src: sf, 
        alt: 'sf',
        link: 'https://www.ubuntu.com/'
    },
    {
        src: ubuntu, 
        alt: 'ubuntu',
        link: 'https://www.ubuntu.com/'
    },
    {
        src: win,
        alt: 'win',
        link: 'https://www.microsoft.com/pl-pl/windows/'
    }
];


const Technologies = () => {
    const icons = imgs.map((el,i)=>{
        return (
            <div style={s.item} key={i}>
                <a href={el.link} key={i} target="_blank">
                    <img src={el.src} alt={el.alt} style={s.icon}  key={i}/>
                </a>
            </div>
        )
    });
    return (
        <div style={s.section}>
            <Grid>
                <Row>
                    <Col xs={12}>
                        <h2 style={s.heading}>
                            Technologies
                        </h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <div style={s.items}>
                            {icons}
                        </div>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
};

const s = {
    heading: {
        fontSize: 40,
        fontWeight: 400,
        margin: '40px 0 20px',
        textAlign: 'center'
    },
    icon: {
        boxSizing: 'content-box',
        cursor: 'pointer',
        filter: 'grayscale(100%)',
        height: 50,
        padding: 30,
        ':hover': {
            filter: 'none'
        }
        
        
    },
    item: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
    },
    items: {
        alignItems: 'center',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    section: {
        padding: '80px 0'
    }
}

export default Radium(Technologies);

