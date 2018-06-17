import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class StatisticsComponent extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      statistics:[],
      loading: true
    };
  }

  componentDidMount(){
    axios.get('/statistic').then(res=>{
      this.setState({
        statistics:res.data,
        loading: false
      });
    }).catch(err=>{
      console.log(err.message);
    });
  }

  render () {
    return (<div className="statistics">
        <Link to="/unpaired" > unpairer </Link>
        {(this.state.loading)?<p>Loading...</p>:
        <table border="2" >
          <tr>
            <th>Number</th> <th>Count</th>
          </tr>
          {this.state.statistics.map((item, index)=>(<tr key={index}><td>{item.number}</td><td>{item.count}</td></tr>))}
        </table>}
      </div>);
  }
}

export { StatisticsComponent };
