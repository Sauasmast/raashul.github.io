import React, { Component } from 'react';

import { IntroText, Text } from '../components'

class LandingScreen extends Component {

  render() {
    const {theme} = this.props
    return (
      <div className ='container'>
        <div className='intro-container' style = {{paddingTop: '90px'}}>
          <IntroText color={theme.color}>
            Hello! 👋
          </IntroText>
          <br/> <br/>   <br/> <br/>
          <IntroText color={theme.color}>
            I'm <b> Rashul Rajbhandari </b>,
            <br/>  <br/>
            I am passionately curious in software engineering

            <br/>  <br/>
            I like to write code.

          </IntroText>
      </div>

      <div style={{marginTop: '90px'}}>
        <Text color={theme.color}>
          <a href="https://twitter.com/Rashul_Cfc/status/507176268232544256" target="_blank" className='main-image-header'>"Whoever you are, wherever you are, you only have to know one thing:<u> #YouCanLearnAnything</u> " </a>
        </Text>
      </div>


      <div style={{marginTop: '70px', bottom:'0', textAlign:'center', fontSize: '1.2em', color: `${theme.color}` }}>
          <a href='https://docs.google.com/document/d/1-yFJ7UrkdUuFJzRDqNQuau4w1QBivunxokDapy2b4Kg/edit#' >View Resume <i class="fas fa-arrow-right"></i></a>
      </div>





      </div>
    );
  }
}

export default LandingScreen;
