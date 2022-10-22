import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/UserContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    // console.log("hi");
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="navbar bg-neutral text-neutral-content">
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          Awesome
        </Link>
        <Link className="btn btn-ghost normal-case text-sl" to="/">
          Home
        </Link>
        <Link className="btn btn-ghost normal-case text-sl" to="/order">
          Order
        </Link>
        <Link className="btn btn-ghost normal-case text-sl" to="/login">
          Login
        </Link>
        <Link className="btn btn-ghost normal-case text-sl" to="/register">
          Register
        </Link>
        {user?.email && <span>Welcome {user.email}</span>}

        {user?.email ? (
          <button onClick={handleSignOut} className="btn btn-ghost">
            Log out
          </button>
        ) : (
          <Link to="login"></Link>
        )}
      </div>
    </div>
  );
};

export default Header;
