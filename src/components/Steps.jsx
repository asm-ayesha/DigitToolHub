import React from 'react';
import userImg from '../assets/user.png'
import productImg from '../assets/package.png'
import rocketImg from '../assets/rocket.png'
const Steps = () => {
    return (
        <div className='bg-base-200'>
            <div className='max-w-7xl mx-auto my-20 p-20'>
                <div className='text-center mb-10'>
                    <h2 className='text-4xl font-bold mb-2'>Get Started In 3 Steps</h2>
                    <p className='text-gray-400'>Start using premium digital tools in minutes, not hours.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                    {/* card 1 */}
                    <div className='bg-white rounded-lg p-5'>
                        <div className='flex justify-end '>
                            <p className='bg-linear-to-r from-blue-900 to-purple-600 text-white px-1 rounded-full'>01</p>
                        </div>
                        <div className='flex justify-center my-4' >
                            <img className='bg-violet-200 rounded-full text-center flex justify-center items-center p-4' src={userImg} alt="" />
                        </div>
                        <div className='text-center space-y-3'>
                            <h2 className='text-xl font-bold'>Create Account</h2>
                            <p className='text-gray-600 text-xs'>Sign up for free in seconds. No credit card required to get started.</p>
                        </div>
                    </div>
                    {/* card 2 */}
                    <div className='bg-white rounded-lg  p-5'>
                        <div className='flex justify-end '>
                            <p className='bg-linear-to-r from-blue-900 to-purple-600 text-white px-1 rounded-full'>02</p>
                        </div>
                        <div className='flex justify-center my-4' >
                            <img className='bg-violet-200 rounded-full text-center flex justify-center items-center p-4' src={productImg } alt="" />
                        </div>
                        <div className='text-center space-y-3'>
                            <h2 className='text-xl font-bold'>Create Account</h2>
                            <p className='text-gray-600 text-xs'>Sign up for free in seconds. No credit card required to get started.</p>
                        </div>
                    </div>
                    {/* card 3 */}
                    <div className='bg-white rounded-lg  p-5'>
                        <div className='flex justify-end '>
                            <p className='bg-linear-to-r from-blue-900 to-purple-600 text-white px-1 rounded-full '>03</p>
                        </div>
                        <div className='flex justify-center my-4 ' >
                            <img className='bg-violet-200 rounded-full text-center flex justify-center items-center p-4' src={rocketImg} alt="" />
                        </div>
                        <div className='text-center space-y-3'>
                            <h2 className='text-xl font-bold'>Create Account</h2>
                            <p className='text-gray-600 text-xs'>Sign up for free in seconds. No credit card required to get started.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Steps;