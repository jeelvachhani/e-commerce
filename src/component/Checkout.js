
import React from "react";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import './Checkout.css';

class Checkout extends React.Component {
    constructor(props) {
    super();
  }

  state = {
    leftHandle: 0,
    rightHandle: 300
  };

  handleSlider = sliderVal => {
    this.setState({
      leftHandle: sliderVal[0],
      rightHandle: sliderVal[1]
    });
  };

  handleChange = e => {
    // console.log(e.target.name, this.state.sliderVal);
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <>
      <div className="jeel">
        <input
          name="leftHandle"
          type="number"
          value={this.state.leftHandle}
          onChange={this.handleChange}
          placeholder="left"
        />
        <input
          type="number"
          name="rightHandle"
          value={this.state.rightHandle}
          onChange={this.handleChange}
          placeholder="right"
        />
        <Nouislider 
         behaviour="tap"
         range={{
           min: 0,
           max: 255
         }}
          onChange={this.handleSlider}
          range={{ min: 0, max: 100 }}
          start={[this.state.leftHandle, this.state.rightHandle]}
        />
        </div>
      </>
    );
  }
}


export default Checkout;