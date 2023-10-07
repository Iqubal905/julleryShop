import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';




const Registration = () => {

  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
console.log(navigate);
  
const handleRegistration = event => {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const email = form.email.value;
  const password = form.password.value;
  const photoUrl = form.photoUrl.value;
  console.log(name, email, password, photoUrl);

  const formData = {
    name: name,
    email: email,
    password: password,
    photoUrl: photoUrl
    
  };
  console.log(formData);

  createUser(formData.email, formData.password)
  .then(result => {
    const loggedUser = result.user;
    console.log(loggedUser);
  
})
navigate('/');
}

    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
<div className="hero-content ">
 
 <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
 <h1 className="text-2xl font-bold">Login now!</h1>
   <form onSubmit={handleRegistration} className="card-body">
   <div className="form-control">
       <label className="label">
         <span className="label-text">Name</span>
       </label>
       <input type="text" name='name' placeholder="name" className="input input-bordered" required />
     </div>
     <div className="form-control">
       <label className="label">
         <span className="label-text">Email</span>
       </label>
       <input type="email" name='email' placeholder="email" className="input input-bordered" required />
     </div>
     <div className="form-control">
       <label className="label">
         <span className="label-text">Password</span>
       </label>
       <input type="password" name='password' placeholder="password" className="input input-bordered" required />
     </div>
     <div className="form-control">
       <label className="label">
         <span className="label-text">Confirm Password</span>
       </label>
       <input type="password" placeholder="confirm password" className="input input-bordered" required />
     </div>
     <div className="form-control">
       <label className="label">
         <span className="label-text">Photo Url</span>
       </label>
       <input type="text" name='photoUrl' placeholder="photo url" className="input input-bordered" required />
     </div>
     <div className="form-control mt-2">
       <button className="btn btn-primary">Login</button>
     </div>
   </form>
   <h2>If you are not register please <Link to="/login" className="label-text-alt link link-hover text-green-500">Register</Link></h2>
   <button className="btn  link link-hover mt-2">Google</button>
 </div>
</div>
</div>
     </div>
    );
};

export default Registration;