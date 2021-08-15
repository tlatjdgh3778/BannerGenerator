import styled from 'styled-components';

const ResizingContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 40rem;
    padding: 2rem 0;

    ${(props) => props.theme.device.Tablet} {
        width: 480px;
    }

    ${(props) => props.theme.device.Mobile} {
        width: 320px;
    }
`;

export { ResizingContainer };