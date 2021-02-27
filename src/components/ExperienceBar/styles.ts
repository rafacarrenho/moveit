import styled from "styled-components";

export const ExperienceBar = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 1rem;
  }

  > div {
    flex: 1;
    height: 4px;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.grayline};
    margin: 0 1.5rem;
    position: relative;
  }

  > div > div {
    height: 100%;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.green};
  }

  > div > span.currentExperience {
    position: absolute;
    top: 12px;
    transform: translateX(-50%);
  }
`;
