import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../assets/styles.css";

export class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      userName: "",
      email: "",
      password: "",
      passwordAgain: "",
      error: "",
    };
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="form-wrapper">
              <h3>Signup</h3>
              <p>
                Already have an account? <Link to="/login">Login.</Link>
              </p>
              {this.state.error ? (
                <p className="text-danger">{this.state.error}</p>
              ) : null}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (this.props.socket) {
                    let empty = 0;
                    Object.keys(this.state).map((key) => {
                      if (this.state[key] === "" && key !== "error") {
                        empty += 1;
                      }
                    });
                    if (empty > 0) {
                      return this.setState({
                        error: "All Field are Required!",
                      });
                    } else {
                      if (this.state.password !== this.state.passwordAgain) {
                        return this.setState({
                          error: "Passwords must match!",
                        });
                      }
                    }
                    this.props.socket.send(
                      JSON.stringify({
                        type: "SIGNUP",
                        data: {
                          email: this.state.email,
                          password: this.state.password,
                          name: this.state.name,
                          userName: this.state.userName,
                        },
                      })
                    );
                  }
                }}
              >
                <div className="row">
                  <div className="col-md-5">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        type="name"
                        className="form-control"
                        placeholder="Enter Name..."
                        value={this.state.name}
                        onChange={(e) =>
                          this.setState({ name: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="form-group">
                      <label>Username</label>
                      <input
                        type="username"
                        className="form-control"
                        placeholder="Enter Username..."
                        value={this.state.userName}
                        onChange={(e) =>
                          this.setState({ userName: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-5">
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
                  <div className="col-md-5">
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
                  <div className="col-md-5">
                    <div className="form-group">
                      <label>Verify Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter Password Again..."
                        value={this.state.passwordAgain}
                        onChange={(e) =>
                          this.setState({ passwordAgain: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="center-element">
                  <button className="btn btn-primary" type="submit">
                    Sign Up!
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

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
