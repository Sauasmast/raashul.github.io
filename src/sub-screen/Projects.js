import React, { Component } from 'react';

import { IntroText, Text, ProjectImage, NavButton } from '../components'
import {Grid, Row, Col, } from 'react-bootstrap';
import {backgroundText} from '../utils';

import TwitterBotImg from '../utils/images/twitterbot.jpg';
import RestaurantImg from '../utils/images/restaurant.jpg';
import CougarBot from '../utils/images/cougarbot.png';

class Projects extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const {theme} = this.props;

    return (
      <div className ='container' style={{marginTop:'30px'}}>
        <center><IntroText color={theme.color}>FEATURED PROJECTS</IntroText> </center>
        <hr />

        <Grid style={{marginTop: '30px', color: `${theme.color}`}}>
          <Row className="show-grid" style={{marginTop: '20px'}}>
              <Col  md={6} mdPull={6}>
                <center>
                  <ProjectImage
                    style={{
                      backgroundImage: `url(${TwitterBotImg})`,
                      height:'500px',
                      width:'100%',
                      backgroundSize: '100% 100%'
                    }}
                  />
              </center>
              </Col>
              <Col  md={6} mdPull={6}>
                <Text bold color={theme.color} >Twitter Bot</Text>
                <br /> <br />
                <Text color={theme.color} size = '15px'>
                  An automated twitter bot for @infourminutesco.
                  <br/>
                  Designed to reply back articles from http://infourminutes.co by searching for users who show interest in blockchain.
                  Searches tweet which includes keywords such as bitcoin, ethereum, steem, ripple etc.
                  Avoids sending duplicate tweets to the same user.
                </Text>

                <br /> <br />
                <a href='https://twitter.com/BotInfourminute' target="_blank"> See Project <i class="fas fa-arrow-right"></i></a>

              </Col>
            </Row>

            <hr/>

            <Row className="show-grid" style={{marginTop: '30px'}}>
                <Col  md={6} mdPull={6}>
                  <center>
                    <ProjectImage
                      style={{
                        backgroundImage: `url(${CougarBot})`,
                        height:'500px',
                        width:'100%',
                        backgroundSize: '100% 100%'
                      }}
                    />
                </center>
                </Col>
                <Col  md={6} mdPull={6}>
                  <Text bold color={theme.color}>Smart Assistant Messenger Bot</Text>
                  <br /> <br />
                  <Text color={theme.color} size = '15px'>
                    Led a team to develop a messenger bot integrated with website that works together as a smart assistant and homework reminder.
                    Implemented DialogFlow to ensure rich user experience.
                    Users are able to get latest library hours, get scholarship information
                  </Text>
                  <br /> <br />
                  <a href='https://cougarbot-site.herokuapp.com' target="_blank"> See Project <i class="fas fa-arrow-right"></i></a>

                </Col>
              </Row>

              < hr />


            <Row className="show-grid" style={{marginTop: '30px'}}>
                <Col  md={6} mdPull={6}>
                  <center>
                    <ProjectImage
                      style={{
                        backgroundImage: `url(${RestaurantImg})`,
                        height:'500px',
                        width:'100%',
                        backgroundSize: '100% 100%'
                      }}
                    />
                </center>
                </Col>
                <Col  md={6} mdPull={6}>
                  <Text bold color={theme.color}>Random Restaurant Generator</Text>
                  <br /> <br />
                  <Text color={theme.color} size = '15px' >
                    Designed to take user location as input and return 10 restaurants near the location
                    Implemented Google map api and Yelp Api to return reviews, ratings, pictures, location and direction.
                  </Text>
                  <br /> <br />
                  <a href='https://murmuring-shelf-55535.herokuapp.com' target="_blank"> See Project <i class="fas fa-arrow-right"></i></a>

                </Col>
              </Row>

              < hr />
        </Grid>

      </div>
    );
  }
}

export default Projects;
