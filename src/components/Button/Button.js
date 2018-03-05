import React from'react';
import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';


const Btn = styled.button`    
    padding: .25em 1em;
    display: inline-block;
    border-radius: 3px;
    color: ${props => props.color};
    background: ${props => props.transparent ? 'transparent' : props.bgColor};
    border: 2px solid ${props => props.borderColor ? props.borderColor : props.bgColor};
    text-decoration: none;
    margin: 0 1em;
    cursor: pointer;


    


    



    &:hover {
        transform: scale( 1.2, 1.2);
    }
`


const Link = styled.a`
    text-decoration: none;
    
    &:link,&:visited {
        color: ${props => props.color? props.color : 'palevioletred'};
        
    }
`

class Button extends React.Component {

    handleHref() {
        if(this.props.href){
            return (
                <Link href={this.props.href}{...this.props}>{this.props.children}</Link>
            )
        } else {
            return (
                <Link href="#"{...this.props}>{this.props.children}</Link>
            )
            
        }
    }
    render() {
        return (
            <Btn {...this.props}>
                {this.handleHref()}
            </Btn>    
        )
    }
}


Button.defaultProps = {
    color: 'white',
    bgColor: 'purple',
    borderColor: 'purple'
}


Button.propTypes = {
    bgColor: PropTypes.string,
    transparent: PropTypes.bool,
    href: PropTypes.string,
    color: PropTypes.string,
    disabled: PropTypes.bool,
    borderColor: PropTypes.string
}


export default Button;