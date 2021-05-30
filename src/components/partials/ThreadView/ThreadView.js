import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router";
import "./ThreadView.css";

class ThreadView extends Component {
  componentDidMount() {
    console.log(this.props.match.params);
    this.init();
  }
  componentDidUpdate(props) {
    if (props.match.params.threadId !== this.props.match.params.threadId) {
      this.init();
    }
  }
  init = () => {
    let currentThread = this.props.threads.filter(
      (t) => t.id === this.props.match.params.threadId
    );
    console.log(this.props);
    if (currentThread && this.props.socket.readyState) {
      let skip = currentThread.Messages || 0;
      this.props.socket.send(
        JSON.stringify({
          type: "THREAD_LOAD",
          data: { threadId: this.props.match.params.threadId, skip: skip },
        })
      );
    }
  };
  render() {
    return <div className="thread-view">Hello from threadview</div>;
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
)(withRouter(ThreadView));
