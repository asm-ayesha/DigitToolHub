import React, { useState } from 'react';

const Princing = () => {
const [activeCard, setActiveCard] = useState(null)

    const handleButtonClick =(card) =>{
        setActiveCard(card)
    }
    return (
        <div className='max-w-7xl mx-auto my-20'>
            <div className='text-center space-y-3 mb-5'>
                <h2 className='text-4xl font-bold'>Simple, Transparent Pricing</h2>
                <p className='text-gray-400'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {/* card 1 */}
                <div className={`rounded-lg p-5 space-y-4 flex flex-col justify-between min-h-100 
                    ${activeCard === 'starter'? 'bg-linear-to-r from-blue-900 to-purple-600':'bg-base-300 '}`}>
                    <div className='space-y-2'>
                        <h4 className={`font-bold text-2xl ${activeCard === "starter"? "text-white": "text-black"}`}>Starter</h4>
                    <p className='text-gray-400'>Perfect for getting started</p>
                    </div>
                    <div>
                        <h2 className={`text-4xl font-bold ${activeCard === 'starter'? 'text-white': 'text-black'}`}>$0<span className='text-xl font-normal text-gray-400'>/Month</span></h2>
                    </div>
                    <ul>
                        <li className='flex items-center gap-2'>
                            <i class="fa-solid fa-check text-green-300"></i>
                            <p className='text-gray-400'>Access to 10 free tools</p>
                        </li>
                        <li className='flex items-center gap-2'>
                            <i class="fa-solid fa-check text-green-300" ></i>
                            <p className='text-gray-400'>Basic templates</p>
                        </li>
                        <li className='flex items-center gap-2'>
                            <i className="fa-solid fa-check text-green-300"></i>
                            <p className='text-gray-400'>Community support</p>
                        </li>
                        <li className='flex items-center gap-2'>
                            <i className="fa-solid fa-check text-green-300"></i>
                            <p className='text-gray-400'>1 project per month</p>
                        </li>
                    </ul>
                    <button  onClick={()=> handleButtonClick('starter')} className={`btn w-full   ${activeCard === 'starter' ? 'bg-white text-violet-600' : 'bg-linear-to-r from-blue-900 to-purple-600 text-white'} rounded-full mt-5`}>Get Stated Free</button>
                </div>

                {/* card 2 */}
                <div className={`rounded-lg p-5 space-y-4 flex flex-col justify-between min-h-100 
                    ${activeCard === 'pro'? 'bg-linear-to-r from-blue-900 to-purple-600':'bg-base-300 '}`}>
                    <div className='space-y-2'>
                        <h4 className={`font-bold text-2xl ${activeCard === "pro"? "text-white": "text-black"}`}>Pro</h4>
                    <p className='text-gray-400'>Best for professionals</p>
                    </div>
                    <div>
                        <h2 className={`text-4xl font-bold ${activeCard === 'pro'? 'text-white': 'text-black'}`}>$29<span className='text-xl font-normal text-gray-400'>/Month</span></h2>
                    </div>
                    <ul>
                        <li className='flex items-center gap-2'>
                            <i className="fa-solid fa-check text-green-300"></i>
                            <p className='text-gray-400'>Access to all premium tools</p>
                        </li>
                        <li className='flex items-center gap-2'>
                            <i className="fa-solid fa-check text-green-300" ></i>
                            <p className='text-gray-400'>Unlimited templates</p>
                        </li>
                        <li className='flex items-center gap-2'>
                            <i className="fa-solid fa-check text-green-300"></i>
                            <p className='text-gray-400'>Priority support</p>
                        </li>
                        <li className='flex items-center gap-2'>
                            <i class="fa-solid fa-check text-green-300"></i>
                            <p className='text-gray-400'>Unlimited projects</p>
                        </li>
                        <li className='flex items-center gap-2'>
                            <i className="fa-solid fa-check text-green-300"></i>
                            <p className='text-gray-400'>Cloud sync</p>
                        </li>
                        <li className='flex items-center gap-2'>
                            <i className="fa-solid fa-check text-green-300"></i>
                            <p className='text-gray-400'>Advanced analytics</p>
                        </li>
                    </ul>
                    <button onClick={()=> handleButtonClick('pro')} className={`btn w-full   ${activeCard === 'pro' ? 'bg-white text-violet-600' : 'bg-linear-to-r from-blue-900 to-purple-600 text-white'} rounded-full mt-5`}>Start Pro Trial</button>
                </div>

                {/* card 3 */}
                <div className={`rounded-lg p-5 space-y-4 flex flex-col justify-between min-h-100 
                    ${activeCard === 'enterprise'? 'bg-linear-to-r from-blue-900 to-purple-600':'bg-base-300 '}`}>
                    <div className='space-y-2'>
                        <h4 className={`font-bold text-2xl ${activeCard === "enterprise"? "text-white": "text-black"}`}>Enterprise</h4>
                    <p className='text-gray-400'>For teams and businesses</p>
                    </div>
                    <div>
                        <h2 className={`text-4xl font-bold ${activeCard === 'enterprise'? 'text-white': 'text-black'}`}>$99<span className='text-xl font-normal text-gray-400'>/Month</span></h2>
                    </div>
                    <ul>
                        <li className='flex items-center gap-2'>
                            <i className="fa-solid fa-check text-green-300"></i>
                            <p className='text-gray-400'>Everything in Pro</p>
                        </li>
                        <li className='flex items-center gap-2'>
                            <i className="fa-solid fa-check text-green-300" ></i>
                            <p className='text-gray-400'>Team collaboration</p>
                        </li>
                        <li className='flex items-center gap-2'>
                            <i className="fa-solid fa-check text-green-300"></i>
                            <p className='text-gray-400'>Custom integrations</p>
                        </li>
                        <li className='flex items-center gap-2'>
                            <i className="fa-solid fa-check text-green-300"></i>
                            <p className='text-gray-400'>Dedicated support</p>
                        </li>
                        <li className='flex items-center gap-2'>
                            <i className="fa-solid fa-check text-green-300"></i>
                            <p className='text-gray-400'>SLA guarantee</p>
                        </li>
                        <li className='flex items-center gap-2'>
                            <i className="fa-solid fa-check text-green-300"></i>
                            <p className='text-gray-400'>Custom branding</p>
                        </li>
                    </ul>
                    <button  onClick={()=> handleButtonClick('enterprise')} className={`btn w-full   ${activeCard === 'enterprise' ? 'bg-white text-violet-600' : 'bg-linear-to-r from-blue-900 to-purple-600 text-white'} rounded-full mt-5`}>Contact Sales</button>
                </div>

            </div>
        </div>
    );
};

export default Princing;