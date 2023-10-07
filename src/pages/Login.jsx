import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {
  const {googleSignIn}= useContext(AuthContext)
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
          
            navigate(from, { replace: true });
        })
}

  const handleGoogleSignIn = ()=>{
    googleSignIn()
    .then(result =>{
        const loggedInUser = result.user;

        console.log(loggedInUser);

       
        
             
            navigate (from, {replace: true})
          
        })
      
    
}


    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content ">
    
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h1 className="text-2xl font-bold">Login now!</h1>
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-2">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <h2>If you are not register please <Link to="/registration" className="label-text-alt link link-hover text-green-500">Register</Link></h2>
      <button onClick={handleGoogleSignIn} className="btn  link link-hover mt-2">Google</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;