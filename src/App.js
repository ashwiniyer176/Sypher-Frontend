import {
  Route,
  Switch,
  NavLink,
  Link,
  BrowserRouter,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";
import * as ChatActions from "./components/store/actions/chatActions";
import * as AuthActions from "./components/store/actions/authActions";
import React from "react";
import Auth from "./components/pages/Auth";
import Messenger from "./components/pages/Messenger";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  componentDidMount() {
    this.props.setupSocket(this.props.token, this.props.userId);
  }
  render() {
    return (
      <div className="App">
        <button
          onClick={(e) => {
            this.props.logout();
          }}
        >
          Log Out
        </button>
        <BrowserRouter>
          <Switch>
            {/* Remember when using Switch, the root path should always be last */}
            <Route
              path="/login"
              render={(props) => {
                if (this.props.token) {
                  return <Redirect to="/" />;
                } else {
                  return <Auth />;
                }
              }}
            />
            <Route
              path="/signup"
              render={(props) => {
                if (this.props.token) {
                  return <Redirect to="/login" />;
                } else {
                  return <Auth />;
                }
              }}
            />
            <Route
              path="/:threadId"
              render={(props) => {
                if (!this.props.token) {
                  <Redirect to="/login" />;
                } else {
                  return <Messenger />;
                }
              }}
            />
            <Route
              path="/"
              render={(props) => {
                if (!this.props.token) {
                  <Redirect to="/login" />;
                } else {
                  return <Messenger />;
                }
              }}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.auth,
  ...state.chat,
});

const mapDispatchToProps = (dispatch) => ({
  setupSocket: (token, userId) => {
    dispatch(ChatActions.setupSocket(token, userId));
  },
  logout: () => {
    dispatch(AuthActions.logout());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
