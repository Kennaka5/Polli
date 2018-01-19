import React, { Component } from 'react';
import {
    Switch, HashRouter as Router,
    Route
  } from 'react-router-dom';
  import HomeContainer from './containers/homeContainer';
  import '../css/style.less';

  export default class App extends Component {
    render() {
      return (
        <Router>
            <div>
                <Switch>
                    <Route path='/' component={HomeContainer} />
                </Switch>
            </div>
        </Router>
      )
    }
}