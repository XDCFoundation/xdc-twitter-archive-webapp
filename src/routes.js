import React from "react";
import { Router, Route } from "react-router-dom";
import { Redirect, Switch } from "react-router";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { connect } from "react-redux";
import { Login, SignUp } from "./modules";
import { history } from "./managers/history";
import BaseComponent from "./modules/baseComponent";
import Header from "./modules/Header";
import CardComponent from "./modules/MainComponent";
import Link from "./modules/TweetlinkComponent";

import Demo from "./Demo";

class Routes extends BaseComponent {
  componentDidMount() {}

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Router history={history}>
          <Switch>
            {/* <Route exact path={"/"} component={Login} /> */}
            <Route exact path={"/sign-up"} component={SignUp} />
            <Route exact path={"/header"} component={Header} />
            <Route exact path={"/maincomponent"} component={CardComponent} />
            <Route exact path={"/"} component={Link} />
            <Route exact path={"/demo"} component={Demo} />
            {/* <Route exact path={"/popup"} component={}/> */}
            <Redirect exact from="*" to="/" />
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user };
};
export default connect(mapStateToProps)(Routes);
