import React from 'react';

const SectionTitle = ({title}) => {
    return (
        <div className='mx-auto text-center '>
            <h2 className=' border-y-4 py-2 font-bold text-2xl '>{title}</h2>
           
        </div>
    );
};

export default SectionTitle;