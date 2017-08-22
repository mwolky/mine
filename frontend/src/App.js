import React, { Component } from 'react';
import {Element} from 'react-scroll';
import Radium, {StyleRoot} from 'radium';
import Navigation from './components/Navigation';
import About from './components/About';
import Home from './components/Home';
import Technologies from './components/Technologies';
import Contact from './components/Contact';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App" style={s.app}>
        <Navigation/>
        <Element name="home">
            <StyleRoot>
                <Home/>
            </StyleRoot>
        </Element>
        <Element name="about">
            <About/>
        </Element>
        <Technologies/>
        <Element name="contact">
            <Contact/>
        </Element>
        <Footer/>
      </div>
    );
  }
}
const s = {
   app: {
       fontFamily: 'Lato,sans-serif'
   }
}

export default Radium(App);
