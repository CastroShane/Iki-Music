import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Explore from "./component/pages/ExplorePage/Explore";
import NavBar from "./component/NavBar";
import Account from "./component/pages/AccountPage/Account";
import GlobalStyles from "./component/GlobalStyles";
import styled from "styled-components";
import Home from "./component/pages/Homepage/Home";
import ArtistPage from "./component/pages/ArtistPage/ArtistPage";
import AlbumPage from "./component/pages/AlbumPage/AlbumPage";
import PlaylistPage from "./component/pages/PlaylistPage/PlaylistPage";

const App = () => {
  return (
    <>
      <Wrapper>
        <GlobalStyles />
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/explore">
              <Explore />
            </Route>
            <Route exact path="/account">
              <Account />
            </Route>
            <Route exact path="/artist/:id">
              <ArtistPage />
            </Route>

            <Route exact path="/album/:id">
              <AlbumPage />
            </Route>
            <Route exact path="/playlist/:id">
              <PlaylistPage />
            </Route>

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
