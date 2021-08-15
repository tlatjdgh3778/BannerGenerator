import styled from "styled-components";
import GitHubIcon from "@material-ui/icons/GitHub";

const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    height: 5%;
    border-top: 1px solid ${({ theme }) => theme.fontColor};
`;

export { FooterContainer, GitHubIcon };
