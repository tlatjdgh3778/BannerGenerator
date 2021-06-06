// fontsize
const fontSize = {
    ssm: '0.25rem',
    sm : '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
}

// deviceSize
const deviceSize = {
    Mobile: '480px',
    Tablet: '768px',
    Desktop: '1440px',
}

// mediaQuery code
const device = {
    Mobile: `@media (min-width: ${deviceSize.Mobile})`,
    Tablet: `@media (min-width: ${deviceSize.Tablet})`,
    Desktop: `@media (min-width: ${deviceSize.Desktop})`,
}
// darkmode
export const darkMode = {
    fontSize,
    device,
    bgColor: '#121212',
    fontColor: 'wheat',
}
// lightmode
export const lightMode = {
    fontSize,
    device,
    bgColor: 'white',
    fontColor: 'black',
}

export const theme = {
    lightMode,
    darkMode,
}