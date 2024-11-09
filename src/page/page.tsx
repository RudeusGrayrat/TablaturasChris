import React, { useState } from 'react';

export default function Page(){
    const [showOptions, setShowOptions] = useState(false);

    const handleButtonClick = () => {
        setShowOptions(!showOptions);
    };

    return (
        <div>
            <button onClick={handleButtonClick}>
                <span>⋮</span>
            </button>
            {showOptions && (
                <div style={{ position: 'absolute', top: '0', left: '0' }}>
                    {/* Render your options here */}
                    <p>Option 1</p>
                    <p>Option 2</p>
                    <p>Option 3</p>
                </div>
            )}
        </div>
    );
};
