import React from 'react';

const JulleryCard = (item) => {
    const {name, img, price}=item
    console.log(item);
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Name: {name}</h2>
    <p>Class: {price}</p>
      
    </div>
  </div> 
        </div>
    );
};

export default JulleryCard;