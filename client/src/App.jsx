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
    description: []
  }
  
  async componentDidMount () {
    let response = await fetch('/type');
    let json = await response.json();
    this.setState({options: json});
    let response2 = await fetch('/style');
    let json2 = await response2.json();
    this.setState({description: json2[0]});  
  }
  onSelectChange = (event) => {
    event.preventDefault();
    this.setState({selectValue: event.target.value})
  }
  render() {
    const { selectValue, description} = this.state;

    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-6 ">
           <h1 style={{textAlign: 'center'}}>Ink Place </h1>
           <Select options={ this.state.options } value= {this.state.selectValue} onChange={this.onSelectChange} />
          </div>
        </div>
        <Images description={description}/>
      </div>
    )  
  }
  
}
  
// hot export works with RHL. Remove line 11 when starting fullstack integration
export default hot(module)(App);
// Uncomment line 13 & delete line 11 when starting fullstack integration
// export default App;
