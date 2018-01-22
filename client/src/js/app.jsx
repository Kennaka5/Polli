import React, { Component } from 'react';
import {
    Switch, HashRouter as Router,
    Route
  } from 'react-router-dom';
  import HomeContainer from './containers/homeContainer';
  import VisitorContainer from './containers/visitorContainer';
  import AdminContainer from './containers/adminContainer';
  import CreateSurveyContainer from './containers/createSurveyContainer';
  import SurveyContainer from './containers/surveyContainer';
  import SurveyResultsContainer from './containers/SurveyResultsContainer';
  import '../css/style.less';

  export default class App extends Component {
    render() {
      return (
        <Router>
            <div>
                <Switch>
                    <Route exact path='/' component={HomeContainer} />
                    <Route path='/visitor' component={VisitorContainer} />
                    <Route path='/admin' component={AdminContainer} />
                    <Route path='/createsurvey' component={CreateSurveyContainer} />
                    <Route path='/survey:id' component={SurveyContainer} />
                    <Route exact path='/results' component={SurveyResultsContainer} />
                </Switch>
            </div>
        </Router>
      )
    }
}