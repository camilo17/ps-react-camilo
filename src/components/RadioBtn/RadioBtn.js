import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Text = styled.span`
  position: relative;
  display: block;
  float: left;
  margin-right: 0;
  width: 20px;
  height: 20px;
  border: 2px solid #c8ccd4;
  border-radius: 100%;
  -webkit-tap-highlight-color: transparent;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background: #225cff;
    transform: scale(0);
    transition: all 0.2s ease;
    opacity: 0.08;
    pointer-events: none;
  }
`;

const Label = styled.label`
  position: relative;
  cursor: pointer;
  line-height: 20px;
  font-size: 14px;
  margin: 15px;

  &:hover ${Text}:after {
    transform: scale(3.6);
  }
`;

const Radio = styled.input.attrs({
  type: "checkbox"
})`
  display: none;
  margin-right: 0;
  &:checked + ${Text} {
    border-color: #225cff;
  }

  &:checked + ${Text}:after {
    transform: translate(50%, 50%) scale(1);
    transition: all 0.2s cubic-bezier(0.35, 0.9, 0.4, 0.9);
    opacity: 1;
  }
`;

export default class RadioBtn extends Component {
  render() {
    const { label, id, name, onChange, value } = this.props;
    return (
      <Label for={id}>
        <Radio id={id} name={name} onChange={onChange} value={value} />
        <Text /> {label}
      </Label>
    );
  }
}

RadioBtn.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string
};
