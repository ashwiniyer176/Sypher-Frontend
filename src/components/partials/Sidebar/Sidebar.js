import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import "./Sidebar.css";
class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <label>Messages</label>
        <ul className="thread-list">
          <li>
            <Link to="/thread">
              <i className="zmdi zmdi-account-circle" />
              <h5>FirstName LastName</h5>
              <p>This is the previous message</p>
            </Link>
          </li>
          <li>
            <Link to="/thread">
              <i className="zmdi zmdi-account-circle" />
              <h5>FirstName LastName</h5>
              <p>This is the previous message</p>
            </Link>
          </li>
          <li>
            <Link to="/thread">
              <i className="zmdi zmdi-account-circle" />
              <h5>FirstName LastName</h5>
              <p>This is the previous message</p>
            </Link>
          </li>
          <li>
            <Link to="/thread">
              <i className="zmdi zmdi-account-circle" />
              <h5>FirstName LastName</h5>
              <p>This is the previous message</p>
            </Link>
          </li>
          <li>
            <Link to="/thread">
              <i className="zmdi zmdi-account-circle" />
              <h5>FirstName LastName</h5>
              <p>This is the previous message</p>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.auth,
  ...state.chat,
});

const mapDispatchToProps = (dispatch) => {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Sidebar));
