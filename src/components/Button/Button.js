import React from'react';
import styled from 'styled-components';


const Btn = styled.button`
    background-color: palevioletred;
    padding: .25em 1em;
    border-radius: 3px;
    background: transparent;
    color: palevioletred;
    border: 2px solid palevioletred;
    text-decoration: none;
    margin: 0 1em;

    &:hover {
        transform: scale( 1.2, 1.2);
    }
`

class Button extends React.Component {
    render() {
        return (
            <Btn href="#">
                {this.props.children}
            </Btn>    
        )
    }
}


export default Button;