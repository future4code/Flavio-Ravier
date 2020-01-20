import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import ApplicationPage from "../ApplicationPage";
import TripsPage from "../TripsPage";
import TripsListPage from "../TripsListPage";
import TripsManagePage from "../TripsManagePage";
import TripsCreatePage from "../TripsCreatePage";
import ApplicationForm from "../ApplicationForm";




export const routes = {
  root: "/",  

  login: "/login",   
  trips: "/login/trips",  
  trips_list: "/login/trips/list",
  trips_create: "/login/trips/create",
  trips_manage: "/login/trips/manage",
  
  application: "/application",
  application_form: "/application/form",
  
};

function router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={ApplicationPage} />
        <Route exact path={routes.login} component={LoginPage} />
        <Route exact path={routes.application} component={ApplicationPage} />
        <Route exact path={routes.application_form} component={ApplicationForm} />
        <Route exact path={routes.trips} component={TripsPage} />
        <Route exact path={routes.trips_list} component={TripsListPage} />
        <Route exact path={routes.trips_manage} component={TripsManagePage} />
        <Route exact path={routes.trips_create} component={TripsCreatePage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default router;
