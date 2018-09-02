import React, { Component } from 'react';

import { IntroText, Text, LineSeparator } from '../components'
import {Grid, Row, Col} from 'react-bootstrap';
import {backgroundText} from '../utils';

class About extends Component {
  constructor(props){
    super(props)
  }

  render() {
      const {theme} = this.props;

    return (
      <div className ='container' style={{marginTop:'60px'}}>
        <center><IntroText color={theme.color}>BACKGROUND</IntroText> </center>

        <Grid style={{marginTop: '20px'}}>
          <Row className="show-grid">
              <Col  md={6} mdPull={6}>
                <center>
                <div className="circleBase type1"
                  style={{
                    borderRadius: '50%',
                    backgroundImage: `url('https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/22154188_10213089248773523_250024450187102609_n.jpg?_nc_cat=0&oh=406cf8adc31868381b9c69ec3b3737e1&oe=5BF64370')`,
                    height:'270px',
                    width:'270px',
                    backgroundSize: '100% 100%'
                  }}
                  >
                </div>
              </center>
              </Col>
              <Col  md={6} mdPull={6}>
                <Text color={theme.color} size='17px'>I'm currently a senior at <b> <u> Caldwell University  </u></b> majoring in Computer Information System and minoring in Mathmatics</Text>
                <br /> <br />
                <Text color={theme.color} size='17px'>
                  Recently, I worked with <b> <u>Yeti</u> </b> to build a platform that enhances business and customer relation.
                  I was part of the core team that designed, developed and launched the Alpha 2.0 version of the platform
                  I used  React and Mobx for Alpha release which served 150 customers.
                  <br/>
                  I also helped build the analytics dashboard for user and transaction history for Beta release.
                </Text>
                  <br /> <br />
                <Text color={theme.color} size='17px'>
                  When I'm not in front of my computer, I am probably playing soccer, watching Netflix or eating tacos.
                </Text>
              </Col>
            </Row>
        </Grid>


        <div className='contact-container' style={{marginTop: '100px', textAlign:'center', color: `${theme.color}`}}>

          <a href ='https://twitter.com/intent/tweet?text=Hi%20@Rashul_Cfc%20%20' target='_blank' color={theme.color}>
            <Text> <u> Let's connect </u> </Text>
            <i class="fab fa-twitter fa-2x" color={theme.color} ></i>
          </a>
        </div>

      </div>
    );
  }
}

export default About;
