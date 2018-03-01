import React from 'react';
import PropTypes from 'prop-types';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';

const Navigation = ({components}) => {
  return (
    <ul className="navigation">
      {
        components.map( name => {
          return (
            <ListItem key={name}>
              <a href={`#${name}`}>{name}</a>
            </ListItem>
          )
        })
      }
    </ul>
  )
}

Navigation.propTypes = {
  components: PropTypes.array.isRequired
};

export default Navigation;