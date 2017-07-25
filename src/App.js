import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 25, 2017'
    };
    this.changeDeadline = this.changeDeadline.bind(this);
  }

  changeDeadline() {
    debugger;
    this.setState({ deadline: this.newDeadline.value });
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">
          Countdown to<br /> {this.state.deadline}
        </div>
        <Clock
          deadline={this.state.deadline} />
        <Form inline>
          <FormControl type="text" placeholder="New date e.g.) October 20 2017"
            inputRef={(ref) => { this.newDeadline = ref; }}
            defaultValue="October 20 2017" />
          <Button bsStyle="primary" onClick={this.changeDeadline}>submit</Button>
        </Form>
      </div>
    );
  }
}

export default App;
