import styled from 'styled-components';

export const StyledLI = styled.li`
  padding: 10px 0;
  border-top: 1px solid ${({ theme }) => theme.mainBorder};
  border-bottom: 1px solid ${({ theme }) => theme.mainBorder};
  border-radius: 5px;

  position: relative;

  display: flex;
  align-items: center;
  margin: 0 auto;
  gap: 10px;
  min-width: 250px;

  .fisrtLetters {
    min-width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.mainBorder};
  }
  .contact-data {
    display: inline-flex;
    flex-direction: column;
    gap: 5px;

    .name {
      /* font-weight: 400; */
      font-size: 18px;
      color: ${({ theme }) => theme.mainColor};
    }
  }

  .additional-menu-btn {
    display: flex;
    justify-content: center;
    align-items: center;

    /* width: 25px;
    height: 25px; */
    padding: 0;
    margin-left: auto;

    border-radius: 50%;
    border: none;
    background-color: ${({ theme }) => theme.deleteContactBtn};
    background-color: transparent;

    color: ${({ theme }) => theme.minorColor};
    color: ${({ theme }) => theme.mainColor};
    font-weight: 700;
    font-family: inherit;

    cursor: pointer;

    transform: translateX(45%);

    svg {
      pointer-events: none;
    }

    &:hover,
    &:focus {
      /* background-color: #9b6e14; */
      /* color: #9b6e14; */
      /* outline: 1px solid #9b6e14; */
    }
  }
`;
