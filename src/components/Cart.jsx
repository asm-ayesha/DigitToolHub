import React from 'react';

const Cart = ({ carts, setCarts }) => {
    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0)

    const handlePyment = () => {
        setCarts([])
    }

    const handleRemove =(item) =>{
        const filterArray = carts.filter(c => c.id !== item.id)
        setCarts(filterArray)
    }
    return (
        <div className='max-w-7xl mx-auto mt-10 shadow border border-gray-50 p-10 rounded-2xl'>
            <h1 className='text-2xl font-bold'>Your Carts</h1>

            {
                carts.length === 0 ? <p className='text-center text-2xl text-gray-500 p-5'>Cart is Empty</p> :
                    <> {
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
                                <button onClick={()=> handleRemove(item)} className='text-red-500'>Remove</button>
                            </div>
                        </div>)
                    }
                        <div className='flex justify-between items-center mt-5 p-5'>
                            <p className='text-xl text-gray-400 font-bold'>Total:</p>
                            <p className='text-2xl font-bold'>${totalPrice}</p>
                        </div>

                        <button onClick={handlePyment} className='btn w-full rounded-full bg-linear-to-r from-blue-900 to-purple-600 text-white py-5'>Proceed To Checkout</button>
                    </>
            }

        </div>
    );
};

export default Cart;