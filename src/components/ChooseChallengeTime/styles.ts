import styled, { css } from "styled-components";

export const ChooseChallengeTimeContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.5rem;
    font-weight: 500;

    label {
      span {
        cursor: pointer;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background: ${theme.colors.white};
        display: flex;
        align-items: center;
        justify-content: center;
      }
      input {
        display: none;
      }
      input:checked + span {
        background: ${theme.colors.primary};
        color: ${theme.colors.white};
      }
      input:disabled + span {
        cursor: not-allowed;
      }
    }
  `}
`;
