import React from 'react';

const GalleryDetails = (item) => {
    const {name, img, price}=item.item
    
    return (
        <div>
           
  <figure><img src={img} alt="Shoes" /></figure>
 
   
      
    
        </div>
    );
};

export default GalleryDetails;