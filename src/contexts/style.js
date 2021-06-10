import React, {createContext, useState} from 'react';

const StyleContext = createContext({
    state: {
        fontColor: "#fff",
        bgColor: "#121212",
        fontStyle: "Roboto",
        fontSize: 20,
    },
    actions: {
        setFontColor: () => {},
        setBgColor: () => {},
        setFontStyle: () => {},
        setFontSize: () => {},
    },
});

const StyleProvider = ({ children }) => {
    const [fontColor, setFontColor] = useState("#fff");
    const [bgColor, setBgColor] = useState("#121212");
    const [fontStyle, setFontStyle] = useState("Roboto");
    const [fontSize, setFontSize] = useState(20);

    const value = {
        state: { fontColor, bgColor, fontStyle, fontSize },
        actions: { setFontColor, setBgColor, setFontStyle, setFontSize },
    };
    return (
        <StyleContext.Provider value={value}>{children}</StyleContext.Provider>
    );
};

const StyleConsumer = StyleContext.Consumer;

export { StyleProvider, StyleConsumer, StyleContext};

// export default StyleContext;