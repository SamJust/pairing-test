import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class UnpairerComponent extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      result:null
    };
  }

  buttonClick = ()=>{
    let inputArray = this.refs.numbers.value.split(',');
    axios.post('/unpaired',{data:inputArray}).then(res =>{
      if(res.status === 200)this.setState({result: res.data});
      else this.setState({result:'All numbers in given array are paired'});
    }).catch(err=>{
      this.setState({result:'An error occured while procesing your request'});
      console.log(err.messaged);
    });
  }

  render () {
    return (<div className="unpairer">
        <Link to="/statistic" > statistics </Link>
        <label>Enter numbers</label>
        <input type="text" placeholder="Numbers" ref="numbers"/>
        <span>{this.state.result}</span>
        <input type="button" className="btn btn-primary" onClick={this.buttonClick} value="Send"/>
      </div>);
  }
}

export { UnpairerComponent };
