import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/pages/Home";
import Explore from "./component/pages/ExplorePage/Explore";
import NavBar from "./component/NavBar";
import Account from "./component/pages/Account";
import GlobalStyles from "./component/GlobalStyles";
import styled from "styled-components";

const App = () => {
  return (
    <>
      <Wrapper>
        <GlobalStyles />
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/explore" component={Explore}></Route>
            <Route exact path="/account" component={Account}></Route>
            {/* <Route exact path="/for-you" component={ForYou}></Route> */}
          </Switch>
        </Router>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  width: 100%;
`;

export default App;
