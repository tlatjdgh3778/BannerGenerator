import React, {createContext, useState} from 'react';

const StyleContext = createContext({
    state: {
        fontColor: "#fff",
        bgColor: "#fff",
    },
    actions: {
        setFontColor: () => {},
        setBgColor: () => {},
    },
});

const StyleProvider = ({ children }) => {
    const [fontColor, setFontColor] = useState("#fff");
    const [bgColor, setBgColor] = useState("#fff");

    const value = {
        state: { fontColor, bgColor },
        actions: { setFontColor, setBgColor },
    };
    return (
        <StyleContext.Provider value={value}>{children}</StyleContext.Provider>
    );
};

const StyleConsumer = StyleContext.Consumer;

export { StyleProvider, StyleConsumer};

export default StyleContext;