// the route of the application

import React from "react";
import { Switch, Route } from "react-router-dom";
import App from "./containers/App";
import Albums from "./containers/albums";
import Photos from "./containers/photos";
import WishList from "./containers/wishlist";
import PhotoById from "./containers/photoById";

const Routes = () => {
  return (
    <App>
      <Switch>
        <Route exact path="/" component={Albums} />
        <Route path="/albums/:albumId" component={Photos} />
        <Route path="/wishlist" component={WishList} />
        <Route path="/photos/:photoId" component={PhotoById} />
      </Switch>
    </App>
  );
};
export default Routes;
