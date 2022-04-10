import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { getViewportSize } from "./_common/util";

import "./App.scss";
import Main from "./pages/Main";
import Timer from "./components/Timer";
import Complete from "./pages/Complete";
import withSplash from "./hoc/withSplash";

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
                            <Main />
                        </Route>
                        <Route path="/timer/:unit/:number">
                            <Timer />
                        </Route>
                        <Route path="/complete">
                            <Complete />
                        </Route>
                    </Switch>
                </main>
            </Router>
        </div>
    );
}

export default withSplash(App);
