import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MainPostCard = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    color: ${props => props.color};
    position: relative;
    background-image: ${props => `url(${props.imageUrl})`};
    background-size: ${props => props.width};
    box-shadow: 0px 7px 20px 0px rgba(0, 0, 0, 0.5);


    &::after {
        content: '';
        position: absolute;
        left: 30px;
        top: 30px;
        bottom: 30px;
        right: 30px;
        border: 3px solid white;
    }

`


const PostCardText = styled.div`
    font-family: Arial, sans-serif;
    font-size: 60px;
    font-weight: bold;
    text-transform: uppercase;
    color: white;
    background-image: ${props => `url(${props.imageUrl})`};

`



function PostCard (props) {
    

    
        return (
           <MainPostCard {...props}>
                <PostCardText color={props.color} imageUrl={props.imageUrl}>

                </PostCardText>
           </MainPostCard>
    
        )
    

    
}


PostCard.propTypes = {
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    topText: PropTypes.string.isRequired,
    bottomText: PropTypes.string.isRequired
}



export default PostCard;