import React, {Component} from 'react';

class Footer extends Component{

  constructor(props){
    super(props)
  }


  render(){
    const {theme} = this.props;

    return(
      <div className="footer" style= {{color: "white"}}>

      	<p className="footer-text">
      	Rashul Rajbhandari © 2018. Handmade with <i className="fa fa-heart heart-icon" aria-hidden="true"></i> <br/> <br/>
      	<strong>Find me on the internet</strong>
      	</p>
      	<p className="hover_icons">
      		<a href="https://github.com/Raashul" target= "_blank" className="link"><i className="fab fa-github fa-2x"></i></a>
      		<a href="https://www.linkedin.com/in/rashul-rajbhandari-73a678113/" target= "_blank" className="link"><i className="fab fa-linkedin fa-2x"></i></a>
      		<a href="https://twitter.com/Rashul_Cfc" target= "_blank" className="link"><i className="fab fa-twitter fa-2x m-left" ></i></a>
      		<a href="https://medium.com/@rashul_cfc" target= "_blank" className="link"><i className="fab fa-medium fa-2x m-left"></i></a>
      	</p>
      </div>
    )
  }
}

export default Footer;
