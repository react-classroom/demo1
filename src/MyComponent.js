import React, {Component} from 'react';

class MyComponent extends Component {
  state = {
    myProp: 'Loading email...'
  };

  constructor(props) {
    super();
  }

  componentDidMount() {
  fetch('https://randomuser.me/api/')
  .then(
    (response)=> {
      return response.json();
    })
  .then(
    (response) => {
      this.setState({
        myProp: response.results[0].email
      });
    });
  }

  render() {
    return (
      <div>{this.state.myProp}</div>
    );
  }
}

export default MyComponent;