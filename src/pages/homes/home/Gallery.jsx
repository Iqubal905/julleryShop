import React from 'react';
import AllJuwelry from '../../../hooks/AllJuwelry';
import GalleryDetails from './GalleryDetails';
import SectionTitle from '../../shared/SectionTitle';

const Gallery = () => {
    const [items] = AllJuwelry()

    const shuffle = items.sort(() => Math.random() - 0.5);
    console.log(items);
        return (
            <div className=' bg-pink-300'>
           <SectionTitle
         title={"Gallery"}
      
        > </SectionTitle> 
    
             <div className="grid md:grid-cols-3 pt-6 gap-4">
             {
                shuffle.map(item => <GalleryDetails
                    key={item._id}
                    item={item}
                ></GalleryDetails>)
            }
        </div>
   
            </div>
        );
};

export default Gallery;