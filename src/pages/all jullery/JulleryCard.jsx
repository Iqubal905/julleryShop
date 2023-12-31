import React from 'react';

const JulleryCard = (item) => {
    const {name, img, price}=item.item
    
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Name: {name}</h2>
    <p>Price: {price}</p>
      
    </div>
   <div className='flex justify-between'>
   <button className='btn  btn-link'>Add to card</button> 
   <button className=' btn btn-link'>Buy</button> 
   </div>
  </div>
  
        </div>
    );
};

export default JulleryCard;