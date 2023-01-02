import styled from 'styled-components';
import { colors } from 'utils/theme';

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

    border-radius: 5px;
    border: 1px solid ${colors.mainBorder};
    height: 35px;
    background-color: ${colors.darkTransparent};
    color: #7f86ff;
    text-align: center;
    font-family: inherit;
    font-size: 20px;
    padding: 5px 10px;

    :focus,
    :hover {
      outline: none;
    }

    :placeholder-shown {
      color: ${colors.mainBlue};
      text-align: center;
      font-size: 20px;
    }
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  font-size: 18px;

  input {
    margin-top: 3px;

    border-radius: 5px;
    border: 1px solid ${colors.mainBorder};
    width: 250px;
    height: 35px;
    background-color: ${colors.darkTransparent};
    color: #7f86ff;
    text-align: center;
    font-family: inherit;
    font-size: 20px;
    padding: 5px 10px;

    :focus,
    :hover {
      outline: none;
    }

    :placeholder-shown {
      color: ${colors.mainBlue};
      text-align: start;
      font-size: 20px;
    }
  }
`;
