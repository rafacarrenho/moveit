import styled from "styled-components";

export const CountdownContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.title};

  > div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;

    span {
      flex: 1;

      &:first-child {
        border-right: 1px solid ${({ theme }) => theme.colors.background};
      }

      &:last-child {
        border-left: 1px solid ${({ theme }) => theme.colors.background};
      }
    }
  }
  > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }
`;

export const CountdownButton = styled.button`
  width: 100%;
  height: 5rem;
  margin-top: 2rem;
  @media screen and (max-width: 930px) {
    margin-bottom: 2rem;
  }
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  border: 0;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  font-size: 1.25rem;
  transition: 0.3s ease;
  border-bottom: 2px solid transparent;

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }

  &.active {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.title};
  }

  &.active:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.white};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.text};
    cursor: not-allowed;
    border-bottom: 0.4rem solid ${({ theme }) => theme.colors.green};
  }
`;
