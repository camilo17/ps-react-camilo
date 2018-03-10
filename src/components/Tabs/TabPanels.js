import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';




class TabPanels extends React.Component {

    render() {
        const { activeIndex } = this.props;
        
        return (
            <div style={{padding: 10}}>{this.props.children[activeIndex]}</div>
        )
    }
}



export default TabPanels;