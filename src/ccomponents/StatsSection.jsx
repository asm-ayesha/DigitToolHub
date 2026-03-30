import React from 'react';

const StatsSection = () => {
    return (
        <div className="bg-gradient-to-r from-blue-900 to-purple-600 mb-20">
            <div className='grid grid-cols-3 items-center text-center py-10 '>
                <div className='space-y-4'>
                    <h2 className='text-4xl font-bold text-white'>50K+</h2>
                    <p className='text-violet-400/100'>Active Users</p>
                </div>
                <div className='space-y-4 border-x-2 border-violet-400/50'>
                    <h2 className='text-4xl font-bold text-white'>200K+</h2>
                    <p className='text-violet-400/100'>Premium Tools</p>
                </div>
                <div className='space-y-4'>
                    <h2 className='text-4xl font-bold text-white'>4.9</h2>
                    <p className='text-violet-400/100'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default StatsSection;