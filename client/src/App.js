import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import { UnpairerComponent } from './components/unpairerComponent.js';
import { StatisticsComponent } from './components/statisticsComponent.js';

class App extends Component {
  render() {
    return (
      <Router>
            <div className="app">
              <Switch>
                <Route path="/unpaired"  component={UnpairerComponent} />
                <Route path="/statistic"  component={StatisticsComponent} />
                <Route component={()=>(<div className="notFound">
                    <Link to="/unpaired" > unpairer </Link>
                    <Link to="/statistic" > statistics </Link>
                  </div>)} />
              </Switch>
            </div>
      </Router>
    );
  }
}

export default App;
