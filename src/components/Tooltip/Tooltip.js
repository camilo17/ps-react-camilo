import React from "react";
import styled from "styled-components";

const Tool = styled.div``;

class Tooltip extends React.Component {
  state = {
    relativeOffset: {
      x: 0,
      y: 0
    },
    triggerBoundingRect: {
      bottom: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0,
      width: 0
    }
  };

  componentDidMount() {
    console.log(this.props.anchor);

    // this.updateTriggerRect(this.props);
    // console.log(this.props.anchor);
  }

  componentWillReceiveProps(nextProps) {
    this.updateTriggerRect(nextProps);
  }

  updateTriggerRect = props => {
    const { anchor, positionRelativeToAnchor } = props;
    let triggerBoundingRect;
    let relativeOffset;
    if (anchor) {
      triggerBoundingRect = anchor.getBoundingClientRect();

      // Needed for correct positioning within Contents.js
      relativeOffset = {
        x: positionRelativeToAnchor
          ? triggerBoundingRect.left - anchor.offsetLeft
          : 0,
        y: positionRelativeToAnchor
          ? triggerBoundingRect.top - anchor.offsetTop
          : 0
      };
    }

    this.setState({ relativeOffset, triggerBoundingRect });
  };

  render() {
    const { children, anchor } = this.props;
    if (!anchor) {
      return null;
    }

    return <Tool>{children}</Tool>;
  }
}

export default Tooltip;
