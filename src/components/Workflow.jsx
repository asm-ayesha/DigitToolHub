import React, { useState } from 'react';

const Workflow = () => {
    const [activeWorkBtn, setActiveWorkBtn] = useState("explore")
        const handleWorkBtn =(btn)=>{
            setActiveWorkBtn(btn)
        }
    return (
        <div className='bg-linear-to-r from-blue-900 to-purple-600 p-20 text-center'>
            <div className='space-y-5'>
                <h1 className='text-4xl font-bold text-white'>Ready to Transform Your Workflow?</h1>
                <p className='text-violet-400'>Join thousands of professionals who are already using Digitools to work smarter. <br />
                    Start your free trial today.</p>
            </div>
            <div className='my-8 flex justify-center items-center gap-4'>
                <button onClick={()=> handleWorkBtn("explore")} className={`btn rounded-full border  ${activeWorkBtn === "explore" ? "bg-white text-violet-600 border-transparent" : " bg-transparent border-violet-400 text-white"}`}>Explore Products</button>

                <button onClick={()=> handleWorkBtn("view")} className={`btn rounded-full border ${activeWorkBtn === "view" ? "bg-white text-violet-600 border-transparent" : " bg-transparent  border-violet-400 text-white"}`}>View Pricing</button>
            </div>
            <div>
                <p className='text-violet-400'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default Workflow;