import React from 'react';
import { Link } from 'react-router-dom';

class LandingComponent extends React.Component {
  render () {
    return (<div>
        <Link to="/unpaired" > unpairer </Link>
        <Link to="/statistic" > statistics </Link>
      </div>);
  }
}

export { LandingComponent };
