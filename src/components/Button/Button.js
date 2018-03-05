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


const Link = styled.a`
    text-decoration: none;
    
    &:link,&:visited {
        color: green;
    }
`

class Button extends React.Component {

    handleHref() {
        if(this.props.href){
            return (
                <Link href={this.props.href}>{this.props.children}</Link>
            )
        } else {
            return (this.props.children);
        }
    }
    render() {
        return (
            <Btn>
                {this.handleHref()}
            </Btn>    
        )
    }
}


export default Button;