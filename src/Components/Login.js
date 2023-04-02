import React, { useContext } from "react";
import { AuthContext } from "../Context/UserContext";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {signIn,signInWithGoogle} = useContext(AuthContext)

    const navigate = useNavigate();


    const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);


    signIn(email, password)
      .then(res=>{
        const user = res.user;
        console.log(user)
        form.reset()
        navigate("/help")
    })
    .catch(err => {
    console.error(err);
    })
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
    //This task is to add next step to show the data to the console
    .then((result) => {
      const user = result.user;
      console.log(user);
    })
    .catch(err => {
      console.error(err);
    })

  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Please login now</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
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
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-success">Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
