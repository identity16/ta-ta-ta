import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { getViewportSize } from "./_common/util";
import Splash from "./splash/Splash";

import "./App.css";

function App() {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  const resize = () => {
    const { width, height } = getViewportSize();
    setWidth(width);
    setHeight(height);
  };

  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);
  }, []);

  const style = {
    width,
    height,
  };

  return (
    <div className="App">
      <Router>
        <main style={style}>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <Splash delay={1000} to={null} />
            </Route>
            <Route path="/main"></Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
