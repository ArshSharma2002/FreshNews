// import logo from './logo.svg';
import "./App.css";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {

  apiKey = process.env.REACT_APP_NEWS_API
  constructor(){
    super();
    this.state = {
    progress:0,
  }
}

  setProgress=(progress)=>{
    this.setState({
      progress:progress,
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <LoadingBar
            color="blue"
            progress={this.state.progress}
            shadow="true"
            height={3}
            // onLoaderFinished={() => setProgress(0)}
          />
          <Switch>
            <Route exact path="/">
              <News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={6} category="general" />
            </Route>
            <Route exact path="/business">
              <News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={6} category="business" />
            </Route>
            <Route exact path="/science">
              <News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={6} category="science" />
            </Route>
            <Route exact path="/technology">
              ``
              <News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={6} category="technology" />
            </Route>
            <Route exact path="/sports">
              <News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={6} category="sports" />
            </Route>
            <Route exact path="/entertainment">
              <News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={6} category="entertainment" />
            </Route>
          </Switch>
          ;
        </div>
      </Router>
    );
  }
}

// export default App;
