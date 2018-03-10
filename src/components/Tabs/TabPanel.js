import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';




class TabPanel extends React.Component {

    render() {
        return (
            <div>{this.props.children}</div>
        )
    }
}



export default TabPanel;