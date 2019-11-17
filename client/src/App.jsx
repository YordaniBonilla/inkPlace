import React, { Component } from 'react';
// RHL only for front end development
import { hot } from 'react-hot-loader';
import 'bootstrap/dist/css/bootstrap.min.css';
import Images from './Components/Images.jsx'
import Select from './Components/Select.jsx'

class App extends Component {
  state = {
    options : [],
    selectValue: '',
    description: [],
    urls : []
  }
  
  async componentDidMount () {
    let response = await fetch('/type');
    let json = await response.json();
    this.setState({options: json});
    let response2 = await fetch('/style');
    let json2 = await response2.json();
    this.setState({description: json2[0]});
    this.setState({urls: json2[1]});  
  }
  onSelectChange = (event) => {
    event.preventDefault();
    this.setState({selectValue: event.target.value})
  }
  render() {
    const { selectValue, description, urls } = this.state;
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 ">
           <h1>Ink Place </h1>
           <Select options={ this.state.options } value= {this.state.selectValue} onChange={this.onSelectChange} />
          </div>
        </div>
        <Images/>
      </div>
    )  
  }
  
}
  
// hot export works with RHL. Remove line 11 when starting fullstack integration
export default hot(module)(App);
// Uncomment line 13 & delete line 11 when starting fullstack integration
// export default App;
