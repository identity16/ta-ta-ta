import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Timer from './components/Timer';
import Complete from './pages/Complete';
import withSplash from './hoc/withSplash';
import styled from 'styled-components';
import useViewportSize from './hooks/useViewportSize';

const AppBlock = styled.div`
  text-align: center;
  color: #333;
`;

const MainPage = styled(Main)``;
const CompletePage = styled(Complete)``;

const PageWrapper = styled.main`
  overflow: hidden;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`;

function App() {
  const { width, height } = useViewportSize();

  return (
    <AppBlock>
      <Router>
        <PageWrapper width={width} height={height}>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/timer/:unit/:number" component={Timer} />
            <Route path="/complete" component={CompletePage} />
          </Switch>
        </PageWrapper>
      </Router>
    </AppBlock>
  );
}

export default withSplash(App);
