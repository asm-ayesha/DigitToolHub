import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ToolCard = ({ tool, carts, setCarts }) => {
    const [isBuy, setIsBuy] = useState(false)

    const handleBuyClick =()=>{
    
        const isFound = carts.find(item => item.id === tool.id)
        if(isFound){
            toast.error("Item already in cart")
            return
        }

        setCarts([...carts,tool])
        setIsBuy(true)
        toast("Your item is now in the cart 🎉")
    }

    // dynamic tag color
    const getTagstyle = (tag) => {
        switch (tag.toLowerCase()) {
            case "limited":
                return "bg-red-100 text-red-600";
            case "new":
                return "bg-green-100 text-green-600";
            case "popular":
                return "bg-purple-100 text-purple-600";
            case "best seller":
                return "bg-yellow-100 text-yellow-700";
            case "trending":
                return "bg-orange-100 text-orange-600";
            case "recommended":
                return "bg-blue-100 text-blue-700";
            
            default:
                return "bg-gray-100 text-gray-600";
        }
    }

    return (

        <div className='shadow-lg rounded-lg border overflow-hidden border-gray-50 transition-all duration-300  hover:-translate-y-2 hover:shadow-2xl'>
            <div className='p-5'>
                <div className='flex justify-end'>
                    <p className={`text-sm px-3 py-1 rounded-full ${getTagstyle(tool.tag)}`}>{tool.tag}</p>
                </div>
                <div className='flex items-center mb-4'>
                    <p className='text-2xl shadow-lg rounded-full overflow-hidden border border-gray-100 p-4'>{tool.icon}</p>
                </div>
                <div className='space-y-3'>
                    <h2 className='text-2xl font-bold'>{tool.name}</h2>
                    <p className='text-gray-400'>{tool.description}</p>
                </div>
                <div className='my-3'>
                    <p className='text-2xl font-bold'>${tool.price}<span className='text-lg text-gray-400'>/{tool.period}</span></p>
                </div>

                <ul>
                    {
                        tool.features.map((features, index) => (
                            <li key={index} className='space-x-2'>
                                <i className="fa-solid fa-check text-green-300"></i>
                                <span className='text-gray-400'>{features}</span>
                            </li>
                        ))
                    }

                </ul>
                <button onClick={handleBuyClick} className={`btn w-full  text-white rounded-full mt-5 ${isBuy? "bg-linear-to-r from-green-900 to-green-600": "bg-linear-to-r from-blue-900 to-purple-600"}`}>Buy Now</button>
            </div>
        </div>

    );
};

export default ToolCard;