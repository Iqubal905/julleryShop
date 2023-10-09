import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import SectionTitle from '../shared/SectionTitle';
const AddJullery = () => {

    const {user} = useContext(AuthContext)

    const [pictureURL, setPictureURL] = useState('');
    const [name, setName] = useState('');
   
    const [price, setPrice] = useState('');
   
  
    const email = user?.email;
   
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(user);
      // Send data to the database or perform other actions
      const formData = {
        pictureURL,
        name,
       
        email,
       
        price,
      
      };
  
      console.log(formData);
      // Perform API call to send data to the server or handle it as needed
  
      fetch('http://localhost:5000/allItems', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(formData)
      })
      .then(res => res.json())
      .then(data => {
          console.log(data);
          if(data.insertedId){
            Swal.fire({
                title:'Success',
                text: 'Added successfully',
                icon :'success',
                confirmButtonText:'Cool'
            })
  
          
//    window.location.href = '/blog';
  
          }
  
      })
  
  
    };
  
    return (



     <div className='max-w-5xl mx-auto   md:pt-32  md:pb-32 grid bg-slate-400'>

<SectionTitle
         title={"Add New Jewelry"}
      
        > </SectionTitle>


         <form onSubmit={handleSubmit} className="mt-6">
        <div className="">
          <label htmlFor="pictureURL" className="block mb-">
            Picture URL
          </label>
          <input
            type="text"
            id="pictureURL"
            value={pictureURL}
            onChange={(e) => setPictureURL(e.target.value)}
            className=" py-1 px-4 text-lg border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="">
          <label htmlFor="name" className="block mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className=" py-1 px-4  text-lg border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
       
       
          
        
        <div className="">
          <label htmlFor="price" className="block mb-1">
          Price
          </label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className=" py-1 px-4 text-lg border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        
       
        {/* Repeat the above pattern for other form fields */}
        {/* Name */}
        {/* Seller Name */}
        {/* Seller Email */}
        {/* Sub-category */}
        {/* Price */}
        {/* Rating */}
        {/* Available Quantity */}
        {/* Details Description */}
        
        <div className="mt-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </form>
     </div>
    );
};

export default AddJullery;