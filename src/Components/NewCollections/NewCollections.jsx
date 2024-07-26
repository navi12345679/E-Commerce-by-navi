import React from 'react';
import data_product1 from '../assets/Newcollection';
import Item from '../Item/Item.jsx'; 
import './newcollections.css';

const  NewCollections= () => {
    return (
        <div className='new-collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        
            <div className='collections'>
                {data_product1.map((item,i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/> 
                    })}
                    </div>
                    </div>
    );
};

export default NewCollections;