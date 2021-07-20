import React, {createContext, useState} from 'react';

const StyleContext = createContext({
    state: {
        fontColor: "#000",
        bgColor: "#C2B7DA",
        fontStyle: "Do Hyeon",
        fontSize: 40,
    },
    actions: {
        setFontColor: () => {},
        setBgColor: () => {},
        setFontStyle: () => {},
        setFontSize: () => {},
    },
});

const StyleProvider = ({ children }) => {
    const [fontColor, setFontColor] = useState("#000");
    const [bgColor, setBgColor] = useState("#C2B7DA");
    const [fontStyle, setFontStyle] = useState("Do Hyeon");
    const [fontSize, setFontSize] = useState(40);

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