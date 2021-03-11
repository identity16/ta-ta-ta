import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { getViewportSize } from "./_common/util";

import "./App.scss";
import Main from "./main/Main";
import Timer from "./timer/Timer";
import Complete from "./complete/Complete";
import withSplash from "./splash/withSplash";
import AdContainer from "./ad/AdContainer";

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
              <AdContainer direction="left">
                <ins
                  className="kakao_ad_area"
                  data-ad-unit="DAN-IO4LRcccKAOp2Ube"
                  data-ad-width="160"
                  data-ad-height="600"
                ></ins>
              </AdContainer>
              <AdContainer direction="right">
                <ins
                  className="kakao_ad_area"
                  data-ad-unit="DAN-IO4LRcccKAOp2Ube"
                  data-ad-width="160"
                  data-ad-height="600"
                ></ins>
              </AdContainer>
              <Main />
            </Route>
            <Route path="/timer/:unit/:number">
              <Timer />
            </Route>
            <Route path="/complete">
              <AdContainer direction="left">
                <ins
                  className="kakao_ad_area"
                  data-ad-unit="DAN-IO4LRcccKAOp2Ube"
                  data-ad-width="160"
                  data-ad-height="600"
                ></ins>
              </AdContainer>
              <AdContainer direction="right">
                <ins
                  className="kakao_ad_area"
                  data-ad-unit="DAN-IO4LRcccKAOp2Ube"
                  data-ad-width="160"
                  data-ad-height="600"
                ></ins>
              </AdContainer>
              <Complete />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default withSplash(App);
