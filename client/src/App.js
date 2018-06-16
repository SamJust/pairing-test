import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { UnpairerComponent } from './components/unpairerComponent.js';
import { StatisticsComponent } from './components/statisticsComponent.js';
import { LandingComponent } from './components/landingComponent.js';

class App extends Component {
  render() {
    return (
      <Router>
            <div className="App">
              <Switch>
                <Route path="/unpaired"  component={UnpairerComponent} />
                <Route path="/statistic"  component={StatisticsComponent} />
                <Route path="*" component={LandingComponent} />
              </Switch>
            </div>
      </Router>
    );
  }
}

export default App;
