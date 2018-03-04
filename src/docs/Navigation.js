import React from 'react';
import PropTypes from 'prop-types';
import {  ListItem } from 'material-ui/List';
import { withStyles } from 'material-ui/styles';


const styles =  ({
  listItem: {
    '&:hover': {
      background: '#3657b0',
      color: 'white'
    },
    '&:hover a': {
      color: 'white'
    }
    
  }
});


const Navigation = ({components, classes}) => {
  return (

    <React.Fragment>
      {
        components.map( name => {
          return (
            <ListItem key={name} component="li" divider disableGutters style={{ textAlign: 'center'}} className={classes.listItem}>
              <a href={`#${name}`} style={{textDecoration: 'none', width: '100%', height: '100%'}}>{name}</a>
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

export default withStyles(styles)(Navigation);