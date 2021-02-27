import styled from "styled-components";

export const ChallengeBoxContainer = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const ChallengeNotActive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
    margin-bottom: 1.5rem;
  }

  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.4;
    max-width: 70%;
  }

  img {
    margin-bottom: 1rem;
  }
`;

export const ChallengeActive = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  header {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
    font-size: 1.25rem;
    padding: 0 2rem 1.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grayline};
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      padding-top: 2rem;
    }

    strong {
      font-size: 2rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.title};
      margin: 1.5rem 0 1rem;
    }

    p {
      line-height: 1.5;
      padding-bottom: 2rem;
    }
  }

  footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    button {
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 0;
      border-radius: 5px;
      color: ${({ theme }) => theme.colors.white};
      font-size: 1rem;
      font-weight: 600;
      transition: 0.3s ease;

      &.challengeFailedButton {
        background-color: ${({ theme }) => theme.colors.red};
      }

      &.challengeSucceededButton {
        background-color: ${({ theme }) => theme.colors.green};
      }

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;
