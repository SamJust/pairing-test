import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class StatisticsComponent extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      statistics:[]
    };
  }

  componentDidMount(){
    axios.get('/statistic').then(res=>{
      this.setState({
        statistics:res.data
      });
    }).catch(err=>{
      console.log(err.message);
    });
  }

  render () {
    return (<div>
        <Link to="/unpaired" > unpairer </Link>
        {this.state.statistics.map((item, index)=>(<p key={index}>{item.number} {item.amount}</p>))}
      </div>);
  }
}

export { StatisticsComponent };
