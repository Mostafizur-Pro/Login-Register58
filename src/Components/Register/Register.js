import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/UserContext";

const Register = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  // console.log("createUser", createUser);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;

    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log("register", user);
        form.reset();
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log("Google", user);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  return (
    <div>
      <div data-theme="light">
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col ">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Please Register now!</h1>
            </div>
            <form
              onSubmit={handleSubmit}
              className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
            >
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
                <button
                  onClick={handleGoogleSignIn}
                  className="btn btn-outline btn-success"
                >
                  Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
