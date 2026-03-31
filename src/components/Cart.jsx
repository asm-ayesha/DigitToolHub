import React from 'react';

const Cart = ({ carts }) => {
    console.log(carts)
    return (
        <div className='max-w-7xl mx-auto mt-10 shadow border border-gray-50 p-10'>
            <h1 className='text-2xl font-bold'>Your Carts</h1>
            {
                carts.map(item => <div key={item.id} >
                    <div className='my-5 bg-gray-100 rounded-lg p-5 flex justify-between items-center'>
                        <div className='flex items-center gap-5'>
                            <div className='flex'>
                                <p className='bg-white rounded-full p-3 text-2xl'>{item.icon}</p>
                            </div>
                            <div>
                                <h2 className='font-bold'>{item.name}</h2>
                                <p className='text-gray-600'>${item.price}</p>
                            </div>
                        </div>
                        <p className='text-red-500'>Remove</p>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Cart;