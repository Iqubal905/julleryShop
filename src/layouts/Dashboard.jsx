import React from 'react';
import { FaHome } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import AllJuwelry from '../hooks/AllJuwelry';

const Dashboard = () => {
const isAdmin = 12
const [items]=  AllJuwelry()

console.log(items);
    return (
        <div className=' pt-4 flex'>
        
{isAdmin==12 ?
 <>
 <div className=' w-56 bg-slate-400 '>
         <NavLink  to='/dashboard/adminhome '  className='flex'><FaHome></FaHome>Dashboard</NavLink>
          
          <li className='flex'>
            <NavLink  to='/dashboard/allJuwelery '  className='flex'><FaHome></FaHome>All juwelery</NavLink>
          </li>
         </div>
</>:<>
<div className=' w-56 bg-slate-400 '>
         <NavLink  to='/dashboard/adminhome '  className='flex'><FaHome></FaHome>Dashboard</NavLink>
          
          <li className='flex'>
            <NavLink  to='/dashboard/myJuwelery '  className='flex'><FaHome></FaHome>My juwelery</NavLink>
          </li>
         </div>
</>

}

         <div className='grow bg-green-400'>
<Outlet></Outlet>
{isAdmin==12 ?
    <h2 className=' text-5xl text-lime-600    pb-96 pt-6'>Total Juewelry: {items.length}</h2>
  :
  <h2 className=' text-5xl text-lime-600    pb-96 pt-6'>My Juewelry</h2>
}
         </div>



        </div>
    );
};

export default Dashboard;