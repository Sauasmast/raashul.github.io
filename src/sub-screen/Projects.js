import React, { Component } from 'react';

import { IntroText, Text, ProjectImage, NavButton, LineSeparator } from '../components'
import {Grid, Row, Col, } from 'react-bootstrap';
import {backgroundText} from '../utils';

import TwitterBotImg from '../utils/images/twitterbot.jpg';
import RestaurantImg from '../utils/images/restaurant.jpg';
import CougarBot from '../utils/images/cougarbot.png';
import Bookstore from '../utils/images/bookstore.jpg';

class Projects extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const {theme} = this.props;

    return (
      <div className ='container' style={{marginTop:'60px'}}>
        <center><IntroText color={theme.color}><u>FEATURED PROJECTS</u></IntroText> </center>

        <Grid style={{marginTop: '30px', color: `${theme.color}`}}>
          <Row className="show-grid" style={{marginTop: '40px'}}>
              <Col  md={6} mdPull={6}>

                  <ProjectImage
                    style={{
                      backgroundImage: `url(${TwitterBotImg})`,
                      height:'500px',
                      width:'100%',
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat"
                    }}
                  />

              </Col>
              <Col  md={6} mdPull={6} style={{marginTop: '25px'}}>
                <Text bold color={theme.color} >Twitter Bot</Text>
                <br /> <br />
                <Text color={theme.color} size = '15px'>
                  An automated twitter bot for <a href='https://twitter.com/infourminutesco' target='_blank'> <b> @infourminutesco.</b> </a>
                  <br/>
                  It was designed to reply back articles from <a href='http://infourminutes.co' target='_blank'> <b>http://infourminutes.co</b> </a>  by searching for users who show interest in blockchain.
                  The bot searches tweet which includes keywords such as bitcoin, ethereum, steem, ripple etc every 3 hours, selects a type to tweet to send from a pool of tweets, and avoids sending duplicate tweets to the same user.
                </Text>

                <br /> <br />
                <a href='https://twitter.com/BotInfourminute' target="_blank"> See Project <i class="fas fa-arrow-right"></i></a>

              </Col>
            </Row>


            <Row className="show-grid" style={{marginTop: '40px'}}>
                <Col  md={6} mdPull={6}>

                    <ProjectImage
                      style={{
                        backgroundImage: `url(${CougarBot})`,
                        height:'500px',
                        width:'100%',
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat"
                      }}
                    />

                </Col>
                <Col  md={6} mdPull={6} style={{marginTop: '25px'}}>
                  <Text bold color={theme.color}>Smart Assistant Messenger Bot</Text>
                  <br /> <br />
                  <Text color={theme.color} size = '15px'>
                    Led a team to develop a messenger bot integrated with website that works together as a smart assistant and homework reminder.
                    <br/>It implements DialogFlow to ensure rich user experience.
                    <br/> Users are able to get latest library hours, scholarship information, emergency notice, admissions information, and homework reminder features.
                  </Text>
                  <br /> <br />
                  <a href='https://cougarbot-site.herokuapp.com' target="_blank"> See Project <i class="fas fa-arrow-right"></i></a>

                </Col>
              </Row>


            <Row className="show-grid" style={{marginTop: '40px'}}>
                <Col  md={6} mdPull={6}>

                    <ProjectImage
                      style={{
                        backgroundImage: `url(${Bookstore})`,
                        height:'500px',
                        width:'100%',
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat"
                      }}
                    />

                </Col>
                <Col  md={6} mdPull={6} style={{marginTop: '25px'}}>
                  <Text bold color={theme.color}>Sell My Book</Text>
                  <br /> <br />
                  <Text color={theme.color} size = '15px' >
                    A web application that allows users to sell used textbooks.
                    <br/>Users can post book information or contact seller through the provided email address.
                  </Text>
                  <br /> <br />
                  <a href='https://github.com/Raashul/Bookstore' target="_blank"> See Project <i class="fas fa-arrow-right"></i></a>

                </Col>
              </Row>

              <Row className="show-grid" style={{marginTop: '40px'}}>
                <Col  md={6} mdPull={6}>

                    <ProjectImage
                      style={{
                        backgroundImage: `url(${RestaurantImg})`,
                        height:'500px',
                        width:'100%',
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat"
                      }}
                    />

                </Col>
                <Col  md={6} mdPull={6} style={{marginTop: '25px'}}>
                  <Text bold color={theme.color}>Random Restaurant Generator</Text>
                  <br /> <br />
                  <Text color={theme.color} size = '15px' >
                    Designed to take user location as input and return 10 restaurants near the location
                    <br/>Implemented Google map api and Yelp Api to return reviews, ratings, pictures, location and direction.
                  </Text>
                  <br /> <br />
                  <a href='https://murmuring-shelf-55535.herokuapp.com' target="_blank"> See Project <i class="fas fa-arrow-right"></i></a>

                </Col>
              </Row>
            </Grid>
      </div>
    );
  }
}

export default Projects;
