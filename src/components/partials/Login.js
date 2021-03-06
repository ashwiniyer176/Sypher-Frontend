import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../assets/styles.css";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="form-wrapper">
              <h3>Login</h3>
              <p>
                Don't have an account? <Link to="/signup">Sign Up!</Link>
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (this.props.socket) {
                    this.props.socket.send(
                      JSON.stringify({
                        type: "LOGIN",
                        data: {
                          email: this.state.email,
                          password: this.state.password,
                        },
                      })
                    );
                  }
                }}
              >
                <div className="row">
                  <div className="col-md-7">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Email..."
                        value={this.state.email}
                        onChange={(e) =>
                          this.setState({ email: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-7">
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter Password..."
                        value={this.state.password}
                        onChange={(e) =>
                          this.setState({ password: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <button className="btn btn-primary" type="submit">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.auth,
  ...state.chat,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
