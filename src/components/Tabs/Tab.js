import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import is from 'styled-is';

const TabElement = styled.div`
    display: inline-block;
    padding: 10px;
    margin: 10px;
    border-bottom: 4px solid;
    border-bottom-color: #ccc;
    cursor: pointer;


    ${is('Active')`
        border-bottom-color: #000;
    `}



    ${is('Disabled')`
       opacity: 0.25;
       cursor: default;
    `}

    

`

class Tab extends React.Component {

    render() {
        const isDisabled = this.props.isDisabled ? true : false;
        const isActive = this.props.isActive;
        


        return (
            <TabElement
                onClick={isDisabled ? null :() => this.props.onActivate()}
                Active={isActive ? true : null}
                Disabled={isDisabled ? true : null}
                
            >
                {this.props.children}
            </TabElement>
        )    
    }
}



export default Tab;