import React from 'react';
import AllJuwelry from '../../hooks/AllJuwelry';
import JulleryCard from './julleryCard';
import SectionTitle from '../shared/SectionTitle';

const AllJullery = () => {

const [items] = AllJuwelry()
console.log(items);
    return (
        <div>
       
       <SectionTitle
         title={"All Jewelry"}
      
        > </SectionTitle> 
         <div className="grid md:grid-cols-3 gap-4 pt-14">
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