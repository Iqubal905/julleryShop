import React from 'react';
import AllJuwelry from '../../hooks/AllJuwelry';
import JulleryCard from '../all jullery/julleryCard';
import { Link } from 'react-router-dom';
import SectionTitle from '../shared/SectionTitle';

const Jullery = () => {
    const [items] = AllJuwelry()
    const itemsPart = items.slice(0,6)
    console.log(items);
        return (
            <div>
          <SectionTitle
         title={"Jewelry"}
      
        > </SectionTitle> 
    
             <div className="grid md:grid-cols-3 gap-4 pt-6">
             {
                itemsPart.map(item => <JulleryCard
                    key={item._id}
                    item={item}
                ></JulleryCard>)
            }
        </div>
    <button className='btn btn-accent mt-8 mb-8'> <li className='  list-none'><Link  to="/allJullery">All Jullery</Link>All Jullery</li></button>
            </div>
        );
};

export default Jullery;