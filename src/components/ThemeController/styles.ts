import styled from "styled-components";

export const Wrapper = styled.div`
  svg {
    font-size: 2rem;
    position: fixed;
    top: 60px;
    right: 12px;
    color: ${({ theme }) => theme.colors.darkMode};
    cursor: pointer;
    user-select: none;
  }
`;
