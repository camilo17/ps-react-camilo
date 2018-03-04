import React from 'react';
import PropTypes from 'prop-types';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';


const Props = ({props}) => {
  return (
  <Paper>  
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Type</TableCell>
          <TableCell>Default</TableCell>
          <TableCell>Required</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
      {
        Object.keys(props).map(key => {
          return (
            <TableRow key={key}>
              <TableCell>{key}</TableCell>
              <TableCell>{props[key].description}</TableCell>
              <TableCell>{props[key].type.name}</TableCell>
              <TableCell>{props[key].defaultValue && props[key].defaultValue.value}</TableCell>
              <TableCell>{props[key].required && "X"}</TableCell>
            </TableRow>
          );
        })
      }
      </TableBody>
    </Table>
  </Paper>  
  )
}

Props.propTypes = {
  props: PropTypes.object.isRequired
};

export default Props;