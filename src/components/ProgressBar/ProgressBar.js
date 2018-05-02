import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ProgressContainer = styled.div`
  width: 100%;
  background-color: grey;
`;

const Bar = styled.div`
  width: ${props => props.progress + "%"};
  height: 30px;
  background-color: ${props => (props.progress >= 100 ? "green" : "blue")};
`;
class ProgressBar extends React.Component {
  render() {
    return (
      <ProgressContainer>
        <Bar progress={5} />
      </ProgressContainer>
    );
  }
}

ProgressBar.propTypes = {
  /** Percent of progress completed */
  percent: PropTypes.number.isRequired,

  /** Bar width */
  width: PropTypes.number.isRequired,

  /** Bar height */
  height: PropTypes.number
};

ProgressBar.defaultProps = {
  height: 5
};

export default ProgressBar;
