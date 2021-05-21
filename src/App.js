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
import React from "react";
import Auth from "./components/pages/Auth";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  componentDidMount() {
    this.props.setupSocket();
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            {/* Remember when using Switch, the root path should always be last */}
            <Route path="/login" component={Auth} />
            <Route path="/signup" component={Auth} />
            <Route
              path="/"
              render={(props) => {
                if (!this.props.token) {
                  <Redirect to="/login" />;
                } else {
                  return <h1>Root</h1>;
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

const mapDispathToProps = (dispatch) => ({
  setupSocket: () => {
    dispatch(ChatActions.setupSocket());
  },
});
export default connect(mapStateToProps, mapDispathToProps)(App);
