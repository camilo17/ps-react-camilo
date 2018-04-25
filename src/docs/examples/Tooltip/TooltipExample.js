import React from "react";
import Tooltip from "react-ultra-instinct/Tooltip";
import { buttons } from "polished";

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
      <div>
        <button
          ref={this.myRef}
          onClick={() => this.setState({ display: !this.state.display })}
        >
          Click me
        </button>

        {this.state.display && (
          <Tooltip anchor={this.myRef}>
            <p>Hello there</p>
          </Tooltip>
        )}
      </div>
    );
  }
}

export default TooltipExample;
