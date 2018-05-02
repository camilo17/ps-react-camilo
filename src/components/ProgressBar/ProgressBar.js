import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ProgressContainer = styled.div`
  width: 100%;
  background-color: #eeee;
`;

const Bar = styled.div`
  width: ${props => props.percent + "%"};
  height: 30px;
  background-color: ${props => (props.percent >= 100 ? "green" : "blue")};
`;
class ProgressBar extends React.Component {
  static defaultProps = {
    percent: 75
  };
  render() {
    return (
      <ProgressContainer>
        <Bar percent={this.props.percent} />
      </ProgressContainer>
    );
  }
}

ProgressBar.propTypes = {
  /** Percent of progress completed */
  percent: PropTypes.number.isRequired
};

export default ProgressBar;
