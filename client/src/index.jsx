import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div>Hello World jsx
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('tpt'));

