import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router";
import "./ChatInput.css";

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
    };
  }

  render() {
    return (
      <div className="input-view">
        <input
          type="text"
          placeholder="Enter text.."
          className="form-control"
          value={this.state.content}
          onChange={(e) => this.setState({ content: e.target.value })}
        />
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
)(withRouter(ChatInput));
