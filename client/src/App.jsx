import React, { Component } from 'react';
// RHL only for front end development
import { hot } from 'react-hot-loader';
import 'bootstrap/dist/css/bootstrap.min.css';
import Images from './Components/Images.jsx'
import Select from './Components/Select.jsx'

class App extends Component {
  state = {
    options : [],
    selectValue: ''
  }
  
  componentDidMount () {
    fetch('/type')
    .then(res => res.json())
    .then(data => this.setState({options: data}));
    
  }
  onSelectChange = (event) => {
    event.preventDefault();
    this.setState({selectValue: event.target.value})
  }
  render() {
    const { selectValue } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
           <h1>Ink Place </h1>
           <Select options={ this.state.options } value= {this.state.selectValue} onChange={this.onSelectChange} />
          </div>
          <div className="col-md-4"></div>
        </div>
        <div className="row">
          <Images/>
        </div>
      </div>
    )  
  }
  
}
  
// hot export works with RHL. Remove line 11 when starting fullstack integration
export default hot(module)(App);
// Uncomment line 13 & delete line 11 when starting fullstack integration
// export default App;
