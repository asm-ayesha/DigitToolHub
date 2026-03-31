import React from 'react';
import cartIcon from '../assets/products/shopping-cart.png'
const NavBar = ({carts}) => {
    return (
        <div className="navbar flex justify-around items-center shadow fixed  z-50 bg-white">
            <div >
                <h2 className="text-transparent bg-clip-text bg-linear-to-r from-blue-900 to-purple-600 text-3xl font-extrabold">DigiToolsHub</h2>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal gap-10 px-1 text-lg">
                    <li>
                        <a>Products</a>
                    </li>
                    <li>
                        <a>Features</a>
                    </li>
                    <li>
                        <a>Pricing</a>
                    </li>
                    <li>
                        <a>Testimonials</a>
                    </li>

                    <li>
                        <a>FAQ</a>
                    </li>
                </ul>
            </div>
            <div className="flex justify-between items-center gap-5">
                
                <div className="relative">
                    <img  src={cartIcon} alt="" />
                     {/* Badge */}
                    {carts.length > 0 && (
                        <span className="absolute -top-4 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                            {carts.length}
                        </span>
                    )}
                </div>
                <button className=''>Login</button>
                <a className="btn bg-linear-to-r from-blue-900 to-purple-600 rounded-full text-white">Get Started</a>
            </div>
        </div>
    );
};

export default NavBar;