import React from 'react';
import styled from 'styled-components';
import is from 'styled-is';
import PropTypes from 'prop-types';


const Flex = styled.div`
    display: flex;
    flex-direction: ${props => props.direction};
    flex-wrap: ${props => props.wrap};
    justify-content: ${props => props.justifyContent};

`



class FlexContainer extends React.Component {


    render() {
        return (
            <Flex {...this.props}>{this.props.children}</Flex>
        )
    }
}


FlexContainer.defaultProps = {
    direction: 'row',
    wrap: 'nowrap',
    justifyContent: 'flex-start',
    alignItems: 'stretch'
}


FlexContainer.propTypes = {
    direction: PropTypes.oneOf(['row', 'row-reversed', 'column', 'column-reverse']),
    wrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
    justifyContent: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']),
    alignItems: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'stretch', 'baseline'])
}


export default FlexContainer;