import React, { Component } from 'react';
import logo from './logo.svg';
import Switch from "react-switch";


import * as SubScreen from './sub-screen';
import {SunnyTheme, DarkTheme, LineSeparator} from './components';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      current_theme: SunnyTheme,
      checked: false
    }
    this.handleChange = this.handleChange.bind(this);

  }

  componentWillMount(){
    const currentTime = new Date().getHours();
    if(currentTime > 19){
      this.setState({
          current_theme: DarkTheme,
          checked: true
      })
    }
  }

  handleChange(checked) {
    this.state.current_theme == SunnyTheme ? this.setState({current_theme: DarkTheme, checked}) : this.setState({current_theme: SunnyTheme, checked})
  }

  render() {
    const {current_theme} = this.state;
    console.log('this.state', this.state);
    return (
      <div className="main" style={{backgroundColor: current_theme.backgroundColor}}>
        <div className ='switch-container' style={{marginTop:'10px', float: 'right', marginRight: '5px'}}>
          <label htmlFor="normal-switch">
              <span style={{color: current_theme.color}}>&#x263C;</span>
              <Switch
                onChange={this.handleChange}
                checked={this.state.checked}
                className="react-switch"
                id="normal-switch"
                onColor="#86d3ff"
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              />
              <span style={{color: current_theme.color}}>&#x263E;</span>
            </label>
        </div>
        {/* <SubScreen.ThemeSwitch theme={current_theme}/> */}
        <div style={{minHeight: '100vh'}}><SubScreen.LandingScreen theme={current_theme}/> </div>
        <LineSeparator color={current_theme.color}/>
        <div style={{minHeight: '100vh'}}><SubScreen.About theme={current_theme}/> </div>
        <SubScreen.Projects theme={current_theme}/>
        <div style={{marginTop: '30px'}}><SubScreen.Footer theme={current_theme}/> </div>
      </div>
    );
  }
}

export default App;
