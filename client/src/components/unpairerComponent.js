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
      this.setState({result: res.data});
    }).catch(err=>{
      console.log(err.messaged);
    });
  }

  render () {
    return (<div>
        <Link to="/statistic" > statistics </Link>
        <input type="text" placeholder="Numbers" ref="numbers"/>
        <input type="button" onClick={this.buttonClick}/>
        {this.state.result}
      </div>);
  }
}

export { UnpairerComponent };
