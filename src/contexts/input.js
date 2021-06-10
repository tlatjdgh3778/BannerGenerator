import React, {createContext, useState} from 'react';

const InputContext = createContext({
    state: {
        text: "Sample Text🎨",
    },
    actions: {
        setText: () => {},
    },
});

const InputProvider = ({ children }) => {
    const [text, setText] = useState("Sample Text🎨");

    const value = {
        state: { text },
        actions: { setText },
    };

    return (
        <InputContext.Provider value={value}>{children}</InputContext.Provider>
    );
};

export { InputProvider, InputContext };
