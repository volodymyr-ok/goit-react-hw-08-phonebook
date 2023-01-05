import styled from 'styled-components';

export const StyledLoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;

  button {
    background-color: ${({ theme }) => theme.enterBtnBG};
    color: ${({ theme }) => theme.enterBtnText};
    border-color: ${({ theme }) => theme.enterBtnBorder};

    transition: all 250ms ease-in-out;

    :hover,
    :focus {
      background-color: ${({ theme }) => theme.enterBtnBGHover};
      color: inherit;
      border-color: ${({ theme }) => theme.enterBtnBorderHover};
    }
  }
`;
