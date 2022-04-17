import { Switch, Route } from 'react-router';

export default (
  <Switch>
    <Route path="/timer/:unit/:number" />
    <Route path="/complete" />
  </Switch>
);
