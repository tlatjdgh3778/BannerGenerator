import { DefaultTheme } from "styled-components";

// fontsize
const fontSize = {
    ssm: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    xxl: "3rem",
};

// deviceSize
const deviceSize = {
    Mobile: "480px",
    Tablet: "768px",
    Desktop: "1440px",
};

// mediaQuery code
const device = {
    Mobile: `@media (max-width: ${deviceSize.Mobile})`,
    Tablet: `@media (max-width: ${deviceSize.Tablet})`,
    Desktop: `@media (max-width: ${deviceSize.Desktop})`,
};

export const theme: DefaultTheme = {
    fontSize,
    device,
    bgColor: "#EFE6E6",
    fontColor: "#C2B7DA",
};
