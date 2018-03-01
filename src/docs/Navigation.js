import React from 'react';
import PropTypes from 'prop-types';
import {  ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';

const Navigation = ({components}) => {
  return (

    <React.Fragment>
      {
        components.map( name => {
          return (
            <ListItem key={name} component="li" divider style={{justifyContent: 'center'}}>
              <a href={`#${name}`} style={{textDecoration: 'none'}}>{name}</a>
            </ListItem>
          )
        })
      }
    </React.Fragment>
  )
}

Navigation.propTypes = {
  components: PropTypes.array.isRequired
};

export default Navigation;