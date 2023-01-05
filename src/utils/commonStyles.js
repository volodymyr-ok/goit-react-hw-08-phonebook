import styled from 'styled-components';

export const StyledH2 = styled.h2`
  font-size: 38px;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.mainColor};
  text-align: center;
`;

export const StyledForm = styled.form`
  margin: 0 auto;
  max-width: 320px;
  text-align: center;

  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
    font-size: 20px;

    input {
      width: 250px;
      height: 35px;
      margin-top: 3px;
      padding: 5px 10px;

      border-radius: 5px;
      border: 1px solid ${({ theme }) => theme.mainBorder};

      background-color: ${({ theme }) => theme.filterInputBG};
      color: ${({ theme }) => theme.inputText};

      text-align: center;
      font-family: inherit;
      font-size: 20px;
    }
  }

  button {
    padding: 5px 10px;

    border-radius: 5px;
    border-width: 1px;
    border-style: solid;

    font-weight: 700;
    font-family: inherit;

    cursor: pointer;
  }
`;

export const Btn = styled.button`
  border-radius: 5px;
  padding: 5px 10px;

  border: 1px solid ${({ theme }) => theme.mainColor};
  background-color: ${({ theme }) => theme.mainColor};
  color: ${({ theme }) => theme.btnText};

  font-size: 20px;
  font-weight: 700;
  font-family: inherit;
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  gap: 5px;

  transition: all 250ms ease-in-out;

  &:hover,
  &:focus {
    background-color: transparent;
    color: inherit;
  }
`;

export const StyledCenteredDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;
