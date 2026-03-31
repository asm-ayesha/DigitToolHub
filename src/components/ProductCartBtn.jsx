import React from 'react';

const ProductCartBtn = ({carts,activeTab, setActiveTab}) => {
    return (
        <div>
            <div className='text-center mb-10'>
                    <h2 className='text-4xl font-bold mb-2'>Premium Digital Tools</h2>
                    <p className='text-gray-400'> Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                </div>




                {/* name of each tab group should be unique */}
                <div className="tabs tabs-box justify-center mx-auto rounded-full w-82 bg-transparent">


                    <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label="Products" checked={activeTab === "products"}
                    onChange={() => setActiveTab("products")}/>


                    <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label={`Cart (${carts.length})`} checked={activeTab === "cart"}
                    onChange={() => setActiveTab("cart")}/>
                    
                </div>
        </div>
    );
};

export default ProductCartBtn;