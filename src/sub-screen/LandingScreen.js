import React, { Component } from 'react';

import { IntroText, Text, LineSeparator } from '../components'

class LandingScreen extends Component {

  render() {
    const {theme} = this.props
    return (
      <div className ='container'>
        <div className='intro-container' style = {{paddingTop: '90px'}}>
          <IntroText color={theme.color}>
            Hello! 👋
          </IntroText>
          <br/> <br/>   <br/>
          <IntroText color={theme.color}>
            I'm <b> Rashul Rajbhandari </b>,
            <br/>  <br/>
            a passionately curious kid in software engineering.

            <br/>  <br/>
            who loves to learn, create and explore new ideas.
          </IntroText>
      </div>

       <br/> <br/>
      <Text color={theme.color} size='16px'>
        Work Mantra- <b>"If you are the smartest person in the room, then you are in the wrong room" </b>
      </Text>

        <div style={{marginTop: '70px'}}>
          <Text color={theme.color}  size='16px'>
            <a href="https://twitter.com/Rashul_Cfc/status/507176268232544256" target="_blank" className='main-image-header'>"Whoever you are, wherever you are, you only have to know one thing:<u> #YouCanLearnAnything</u> " </a>
          </Text>
        </div>


        <div style={{marginTop: '50px', textAlign:'center', fontSize: '1.2em', color: `${theme.color}` }}>
            <a className ='resume-link' href='https://docs.google.com/document/d/1-yFJ7UrkdUuFJzRDqNQuau4w1QBivunxokDapy2b4Kg/edit#' >View Resume <i class="fas fa-arrow-right"></i></a>
        </div>
      </div>
    );
  }
}

export default LandingScreen;
