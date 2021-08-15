import styled from "styled-components";

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    height: 10%;
    font-size: ${({ theme }) => theme.fontSize.xxl};
    font-weight: bold;
    justify-content: center;
    padding: 1.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.fontColor};

    ${({ theme }) => theme.device.Tablet} {
        font-size: ${({ theme }) => theme.fontSize.xl};
    }
`;

export { HeaderContainer };
