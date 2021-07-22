import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

// import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import DrawPaintingContainer from './painting/draw_painting_container';
import PaintingsContainer from './painting/paintings_container';
import PaintingShowContainer from './painting/painting_show_container';
import ArtistShowContainer from './user/artist_show_container'

const App = () => (
  <div className="outermost">
    <NavBarContainer />
    <Switch>
      {/* <AuthRoute exact path="/" component={MainPage} /> */}
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />

      <Route exact path="/" component={PaintingsContainer} />
      <Route exact path="/draw-painting" component={DrawPaintingContainer} />
      <Route exact path="/paintings/:id" component={PaintingShowContainer} />
      <Route exact path="/artist/:id" component={ArtistShowContainer} />
      <DrawPaintingContainer />
    </Switch>
  </div>
);

export default App;