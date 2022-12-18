import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SetupPage from './pages/SetupPage';
import TimerPage from './pages/TimerPage';
import CompletePage from './pages/CompletePage';
import styled from 'styled-components';
import useViewportSize from './hooks/useViewportSize';

function App() {
  const { width, height } = useViewportSize();

  return (
    <AppBlock>
      <Router>
        <PageWrapper width={width} height={height}>
          <Switch>
            <Route exact path="/" component={SetupPage} />
            <Route path="/timer/:unit/:number" component={TimerPage} />
            <Route path="/complete" component={CompletePage} />
          </Switch>
        </PageWrapper>
      </Router>
    </AppBlock>
  );
}

export default App;

const AppBlock = styled.div`
  text-align: center;
  color: #333;
`;

const PageWrapper = styled.main<{ width: number; height: number }>`
  overflow: hidden;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`;
