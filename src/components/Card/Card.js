import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';







const TextShadow = styled.h1`
    text-transform: uppercase;
    font-size: 2.2em;
    text-shadow: 1px 1px rgba(0, 0, 0, 0.04), 2px 2px rgba(0, 0, 0, 0.04),
    3px 3px rgba(0, 0, 0, 0.04), 4px 4px rgba(0, 0, 0, 0.04),
    0.125rem 0.125rem rgba(0, 0, 0, 0.04), 6px 6px rgba(0, 0, 0, 0.04),
    7px 7px rgba(0, 0, 0, 0.04), 8px 8px rgba(0, 0, 0, 0.04),
    9px 9px rgba(0, 0, 0, 0.04), 0.3125rem 0.3125rem rgba(0, 0, 0, 0.04),
    11px 11px rgba(0, 0, 0, 0.04), 12px 12px rgba(0, 0, 0, 0.04),
    13px 13px rgba(0, 0, 0, 0.04), 14px 14px rgba(0, 0, 0, 0.04),
    0.625rem 0.625rem rgba(0, 0, 0, 0.04), 16px 16px rgba(0, 0, 0, 0.04),
    17px 17px rgba(0, 0, 0, 0.04), 18px 18px rgba(0, 0, 0, 0.04),
    19px 19px rgba(0, 0, 0, 0.04), 1.25rem 1.25rem rgba(0, 0, 0, 0.04);
`

const Front = styled.div`
    display: block;
    color: white;
    height: inherit;
    
    transition-timing-function: cubic-bezier(.175, .885, .32, 1.275);
    transition-duration: .5s;
    transition-property: transform, opacity;
    background-image: ${props => `url(${props.image})`};
    background-size: cover;
    background-position: center;
    width: inherit;
    padding: 1em 2em;
    border-radius: 10px;
    
    

    transform: rotateY(0deg);
`

const Back = styled.div`
    display: block;
    transition-timing-function: cubic-bezier(.175, .885, .32, 1.275);
    transition-duration: .5s;
    transition-property: transform, opacity;

    position: absolute;
    opacity: 0;
    top: 0px;
    left: 0px;
    width: 100%;
    height: inherit;
    transform: rotateY(-180deg);
    background: #313131;
    border-radius: 10px;
    padding: 1em 2em;
    background-size: cover;
    background-position: center;


`


const Flip = styled.div`
    position: relative;
    text-align: center;
    font-weight: normal;
    box-sizing: border-box;
    display: inline-block;
    width: 400px;
    height: 220px;

    &:hover ${Front} {
        transform: rotateY(180deg);
    }

    &:hover ${Back} {
       opacity: 1;
       transform: rotateY(0deg);
    }
`






class Card extends React.Component {

    
    render() {

        const { bgImage, title } = this.props;

        return (


            
        <Flip>
            <Front
                image = {bgImage}
                id="front"
            >
                <TextShadow>{title}</TextShadow>
            </Front>

            <Back
                id="back"
            >
                {this.props.children}
            </Back>
        </Flip>

            
        ) 
    }
}



Card.propTypes = {
    title: PropTypes.string,
    bgImage: PropTypes.string.isRequired,
    verticalFlip: PropTypes.bool.isRequired
}





            

export default Card;        