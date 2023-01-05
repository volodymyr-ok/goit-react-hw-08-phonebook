import styled from 'styled-components';

export const FiltersForm = styled.form`
  width: 250px;

  margin: 0 auto;
  margin-bottom: 15px;

  display: flex;
  flex-direction: column;

  font-size: 18px;

  label {
    display: block;
    text-align: start;
    margin-bottom: 5px;
  }

  input {
    margin: 0 auto;

    width: 250px;
    height: 35px;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.mainBorder};
    background-color: ${({ theme }) => theme.filterInputBG};
    color: ${({ theme }) => theme.inputText};

    text-align: center;
    font-family: inherit;
    font-size: 20px;
    padding: 5px 10px;

    :focus,
    :hover {
      outline: 2px solid ${({ theme }) => theme.inputHoverLine};
    }
  }
`;
