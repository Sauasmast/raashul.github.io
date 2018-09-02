import React, { Component } from 'react';
import Switch from "react-switch";

class ThemeSwitch extends Component {
  constructor(props){
    super(props);
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
}

  handleChange(checked) {
    this.setState({ checked });
  }
  render() {
    return (
      <div className ='switch-container' style={{marginTop:'10px', float: 'right'}}>
        <label htmlFor="normal-switch">
            <span>Icon</span>
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
            <span>Icon</span>
          </label>
      </div>
    );
  }
}

export default ThemeSwitch;
