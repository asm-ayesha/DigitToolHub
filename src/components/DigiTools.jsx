import React, { use } from 'react';
import ToolCard from './ToolCard';

const DigiTools = ({ digiToolsPromise, carts, setCarts}) => {
    const tools = use(digiToolsPromise)





    return (
        <div className='max-w-7xl mx-auto mb-20 pb-20 px-4 md:px-6 '>


            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-15 '>
                {
                    tools.map(tool => <ToolCard key={tool.id} tool={tool} carts={carts} setCarts={setCarts}></ToolCard>)
                }
            </div>

        </div>
    );
};

export default DigiTools;