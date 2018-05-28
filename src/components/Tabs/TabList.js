import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Paper from "material-ui/Paper";

class TabList extends React.Component {
  render() {
    const { activeIndex } = this.props;
    const children = React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {
        isActive: index === activeIndex,
        onActivate: () => {
          this.props.onActiveTab(index);
        }
      });
    });

    return <div>{children}</div>;
  }
}

export default TabList;
