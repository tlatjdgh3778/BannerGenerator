import React, {
    createContext, useState
} from 'react';

const InputContext = createContext({
    state: {
        text: "input text",
    },
    actions: {
        setText: () => {},
    },
});

const InputProvider = ({ children }) => {
    const [text, setText] = useState("input text");

    const value = {
        state: { text },
        actions: { setText },
    };

    return (
        <InputContext.Provider value={value}>{children}</InputContext.Provider>
    );
};

const InputConsumer = InputContext.Consumer;

export { InputProvider, InputConsumer };

export default InputContext;