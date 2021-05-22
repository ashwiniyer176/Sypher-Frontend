import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router";
import ChatInput from "../partials/ChatInput/ChatInput";
import Sidebar from "../partials/Sidebar/Sidebar";
import ThreadView from "../partials/ThreadView/ThreadView";

class Messenger extends Component {
  render() {
    return (
      <div className="messenger-container">
        <Sidebar />
        <ThreadView />
        <ChatInput />
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
)(withRouter(Messenger));
