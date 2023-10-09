import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import logo from '../../assets/logo.png'
const Navbar = () => {
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/login";
  
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
        .then(() => { })
        .catch(error => console.log(error));
        navigate(from, { replace: true });
}

const NavOptions = <>
    <li><Link  to="/">Home</Link></li>
     <li><Link  to="/allJullery">All Jewelry</Link></li>
    <li><Link  to="/myJullery">My Jewelry</Link></li>
    <li><Link  to="/addJullery">Add Jewelry</Link></li>
    <li><Link to="/blog">Blogs</Link></li>
  
    {
      user ? 
      <>
        <li><Link to='/dashboard'>Dashboard</Link></li>
       <button onClick={handleLogOut} className="">LogOut</button>
       </>
     
      : 
      <> <li><Link to="/login">Login</Link></li></>
    } 
   
   
</>



    return (
        <div>
           <div className="navbar  bg-rose-900 text-white fixed  z-10">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn text-white btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="  text-white menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {NavOptions}
      </ul>
    </div>
    <img src={logo} className='w-16 rounded-full' alt="img" />
    <a className="btn btn-ghost normal-case text-xl">Jewelry Mat</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className=" menu menu-horizontal px-1">
      {NavOptions}
    </ul>
  </div>
  <div className="navbar-end">
  {
    user ? 
    <>
      <img src={user?.photoURL} className='w-16 rounded-full' alt="img"  />
    </> :
    <>
    
    </>
  }
    
  </div>
</div> 
        </div>
    );
};

export default Navbar; 