import React from "react";
import Tooltip from "react-ultra-instinct/Tooltip";

class TooltipExample extends React.Component {
  constructor(props) {
    super(props);

    this.myRef = React.createRef();
    this.state = {
      display: true
    };
  }

  render() {
    return (
      <div ref={this.myRef}>
        <button onClick={() => this.setState({ display: !this.state.display })}>
          Click me
        </button>

        {this.state.display && (
          <Tooltip anchor={this.myRef} positionRelativeToAnchor>
            <p>Hello there</p>
          </Tooltip>
        )}
      </div>
    );
  }
}

export default TooltipExample;
