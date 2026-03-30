import React from 'react';
import cartIcon from '../assets/products/shopping-cart.png'
const NavBar = () => {
    return (
        <div className="navbar flex justify-around items-center shadow">
            <div >
                <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-purple-600 text-3xl font-extrabold">DigiToolsHub</h2>
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
                <img src={cartIcon} alt="" />
                <button className=''>Login</button>
                <a className="btn bg-gradient-to-r from-blue-900 to-purple-600 rounded-full text-white">Get Started</a>
            </div>
        </div>
    );
};

export default NavBar;