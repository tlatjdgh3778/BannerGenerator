import React, { createContext, useState } from 'react';

const SizingContext = createContext({
    state: {
        width: 650,
        height: 360,
    },
    actions: {
        setWidth: () => {},
        setHeight: () => {},
    },
});

const SizingProvider = ({ children }) => {
    const [width, setWidth] = useState(650);
    const [height, setHeight] = useState(360);

    const value = {
        state: { width, height },
        actions: { setWidth, setHeight },
    };
    return( 
    <SizingContext.Provider value={value}>
        {children}
    </SizingContext.Provider>
    );
};
export { SizingProvider, SizingContext };
