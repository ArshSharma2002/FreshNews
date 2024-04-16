import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  // const apiKey = process.env.REACT_APP_NEWS_API

  const apiKey = process.env.REACT_APP_NEWS_API


  const [progress, setProgress] = useState(0)
  const [lang, setLang] = useState('en')

  return (
    <Router>
      <div>
        <Navbar setLang={setLang} lang={lang} />
        <LoadingBar
          color="blue"
          progress={progress}
          shadow="true"
          height={3}
        // onLoaderFinished={() => setProgress(0)}
        />
        <Switch>
          <Route exact path="/">
            <News setProgress={setProgress} lang={lang} apiKey={apiKey} key="general" pageSize={6} category="general" />
          </Route>
          <Route exact path="/business">
            <News setProgress={setProgress} lang={lang} apiKey={apiKey} key="business" pageSize={6} category="business" />
          </Route>
          <Route exact path="/science">
            <News setProgress={setProgress} lang={lang} apiKey={apiKey} key="science" pageSize={6} category="science" />
          </Route>
          <Route exact path="/technology">
            ``
            <News setProgress={setProgress} lang={lang} apiKey={apiKey} key="technology" pageSize={6} category="technology" />
          </Route>
          <Route exact path="/sports">
            <News setProgress={setProgress} lang={lang} apiKey={apiKey} key="sports" pageSize={6} category="sports" />
          </Route>
          <Route exact path="/entertainment">
            <News setProgress={setProgress} lang={lang} apiKey={apiKey} key="entertainment" pageSize={6} category="entertainment" />
          </Route>
        </Switch>
        ;
      </div>
    </Router>
  )
}

export default App


// export default App;
