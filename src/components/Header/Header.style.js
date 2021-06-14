import styled from 'styled-components';

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    height: 10%;
    font-size: ${(props) => props.theme.fontSize.xxl};
    font-weight: bold;
    justify-content: center;
    padding: 1.5rem;
    border-bottom: 1px solid #C2B7DA;

    ${(props) => props.theme.device.Tablet} {
        font-size: ${(props) => props.theme.fontSize.xl};
    }
`;

export { HeaderContainer };