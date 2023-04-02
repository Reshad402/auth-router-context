import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";

const Header = () => {
  const { user ,logOut} = useContext(AuthContext);
  console.log("Context", user);

  //Log out niye kaj now
  const handleLogOut = () => {
    logOut();
  };

  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <a className="btn btn-ghost normal-case text-xl">Web view</a>
        <Link className="btn btn-ghost normal-case text-xl" to="/home">
          Home
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/login">
          Log in
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/Register">
          Resister
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/Help">
          Help
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/orders">
          Orders
        </Link>
      {user?.email && <span>Welcome, {user.email}</span>}
      {
      user?.email?<button onClick={handleLogOut} className="btn btn-outline btn-success">Log-Out</button>:
      <Link to='/logIn'><button className="btn btn-outline btn-success">Log-In</button></Link>
      }
      </div>
    </div>
  );
};

export default Header;
