import styled from 'styled-components';

export const StyledLI = styled.li`
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  min-width: 250px;

  p {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .name {
      color: #b6baff;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 0 solid #b6baff;
    /* padding: 5px 10px; */
    padding: 0;
    background-color: #cc4343;
    margin-top: 5px;
    margin-left: auto;

    color: #222327;
    font-weight: 700;
    font-family: inherit;
    cursor: pointer;

    &:hover,
    &:focus {
      background-color: transparent;
      color: #9b6e14;
      outline: 1px solid #9b6e14;
    }
  }
`;
