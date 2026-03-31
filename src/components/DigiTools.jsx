import React, { use } from 'react';
import ToolCard from './ToolCard';

const DigiTools = ({digiToolsPromise}) => {
    const tools = use(digiToolsPromise)
    console.log(tools)
    return (
        <div className='max-w-7xl mx-auto my-20 p-20'>
            <div>
                <div className='text-center mb-10'>
                    <h2 className='text-4xl font-bold mb-2'>Premium Digital Tools</h2>
                    <p className='text-gray-400'> Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-15'>
                    {
                        tools.map(tool=> <ToolCard key={tool.id} tool={tool}></ToolCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default DigiTools;