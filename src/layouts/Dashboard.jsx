import React, { useContext } from 'react';
import { FaHome } from 'react-icons/fa';
import { Link, NavLink, Outlet } from 'react-router-dom';
import AllJuwelry from '../hooks/AllJuwelry';
import { AuthContext } from '../providers/AuthProvider';

const Dashboard = () => {

  const {user} = useContext(AuthContext)

const [items]=  AllJuwelry()

console.log(items);
    return (
        <div className=' pt-4 flex'>
        
{user?.email=='admin@gmail.com' ?
 <>
 <div className=' w-56 bg-slate-400 '>
         <NavLink  to='/dashboard/adminhome '  className='flex'>Dashboard</NavLink>
         
          <li className='flex'>
            <NavLink  to='/'  className='flex'><FaHome></FaHome>Home</NavLink>
          </li>
          <li className='flex'>
            <NavLink  to='/dashboard/allJuwelery '  className='flex'>All jewelry</NavLink>
          </li>
         </div>
</>:<>
<div className=' w-56 bg-slate-400 '>
         <NavLink  to='/dashboard/adminhome '  className='flex'>Dashboard</NavLink>
         <li className='flex'>
            <NavLink  to='/'  className='flex'><FaHome></FaHome>Home</NavLink>
          </li>
          <li className='flex'>
            <NavLink  to='/dashboard/myJuwelery '  className='flex'>My jewelry</NavLink>
          </li>
         </div>
</>

}

         <div className='grow bg-green-400'>
<Outlet></Outlet>
{user?.email=='admin@gmail.com' ?
    <h2 className=' text-5xl text-lime-600    pb-96 pt-6'>Total Juewelry: {items.length}</h2>
  :
  <h2 className=' text-5xl text-lime-600    pb-96 pt-6'>My Juewelry</h2>
}
         </div>

        

        </div>
    );
};

export default Dashboard;