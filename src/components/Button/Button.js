import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Btn = styled.button``;

const Link = styled.a`
  text-decoration: none;

  &:link,
  &:visited {
    color: inherit;
  }
`;

class Button extends React.Component {
  handleHref = () => {
    const { children } = this.props;
    if (this.props.href) {
      return (
        <Link target="_blank" href={this.props.href} {...this.props}>
          {this.props.children}
        </Link>
      );
    } else {
      return children;
    }
  };
  render() {
    return <Btn {...this.props}>{this.handleHref()}</Btn>;
  }
}

Button.defaultProps = {
  color: "white",
  bgColor: "purple",
  borderColor: "purple"
};

Button.propTypes = {
  bgColor: PropTypes.string,
  transparent: PropTypes.bool,
  href: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  borderColor: PropTypes.string
};

export default Button;
