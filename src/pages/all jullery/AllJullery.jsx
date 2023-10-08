import React from 'react';
import AllJuwelry from '../../hooks/AllJuwelry';
import JulleryCard from './julleryCard';

const AllJullery = () => {

const [items] = AllJuwelry()
console.log(items);
    return (
        <div>
         <h2>all jullery</h2>  

         <div className="grid md:grid-cols-3 gap-4">
         {
            items.map(item => <JulleryCard
                key={item._id}
                item={item}
            ></JulleryCard>)
        }
    </div>

        </div>
    );
};

export default AllJullery;