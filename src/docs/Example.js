import React from 'react';
import PropTypes from 'prop-types';
import CodeExample from './CodeExample';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showCode: false };
  }

  toggleCode = event => {
    event.preventDefault();
    this.setState(prevState => {
      return {showCode: !prevState.showCode};
    });
  }

  render() {
    const {showCode} = this.state;
    const {code, description, name} = this.props.example;
    // Must use CommonJS require to dynamically require because ES Modules must be statically analyzable.
    const ExampleComponent = require(`./examples/${this.props.componentName}/${name}`).default;
    return (
      <Paper className="example">
        {description && <h4>{description}</h4> }

        <div style={{padding: '10px 10px', marginBottom: '15px'}}>
          <ExampleComponent />
        </div>
        <Button color="primary" variant="raised">
          <a href="" onClick={this.toggleCode} style={{textDecoration: 'none', color: 'white'}}>
            {showCode ? "Hide" : "Show"} Code
          </a>
        </Button>

        {showCode && <CodeExample>{code}</CodeExample>}
      </Paper>
    )
  }
}

Example.propTypes = {
  example: PropTypes.object.isRequired,
  componentName: PropTypes.string.isRequired
}

export default Example;