import React from "react";
import Auth from "./auth/Auth";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: null,
      password: null,
    };
  }

  componentDidMount() {
    if (Auth.isAuthenticated()) {
      this.props.history.push("/dashboard");
    }
  }

  loginSubmit() {
    let authData = {
      name: "Md Reja",
      username: "mhreja",
      token: "abcd-1234",
    };

    Auth.login(() => {
      localStorage.setItem("auth", JSON.stringify(authData));
      this.props.history.push("/dashboard");
    });
  }

  render() {
    return (
      <div>
        <div className="container my-5 py-5 ">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-12 col-md-9">
              <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                  <div className="row">
                    <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                    <div className="col-lg-6">
                      <div className="p-5">
                        <div className="text-center">
                          <h1 className="h4 text-gray-900 mb-4">
                            Welcome Back!
                          </h1>
                        </div>
                        <form>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control form-control-user"
                              name="username"
                              placeholder="Username"
                              autoComplete="true"
                              onChange={(e) => {
                                this.setState({ username: e.target.value });
                              }}
                            />
                            {this.state.username}
                          </div>
                          <div className="form-group">
                            <input
                              type="password"
                              className="form-control form-control-user"
                              name="password"
                              placeholder="Password"
                              autoComplete="true"
                              onChange={(e) => {
                                this.setState({ password: e.target.value });
                              }}
                            />
                            {this.state.password}
                          </div>
                          <button
                            type="submit"
                            className="btn btn-info btn-user btn-block"
                            onClick={() => {
                              this.loginSubmit();
                            }}
                          >
                            Login
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
