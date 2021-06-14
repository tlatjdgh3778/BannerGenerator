import styled from 'styled-components';

const SetUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
    width: 35rem;

    ${(props) => props.theme.device.Tablet} {
        width: 480px;
    }

    ${(props) => props.theme.device.Mobile} {
        width: 320px;
    }
`;

export { SetUpContainer };