import styled from 'styled-components';

export const StyledUL = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 5px;

  li {
    /* border: 1px solid black; */
    a {
      /* font-size: 26px; */
      color: #b6baff;
      font-family: inherit;
      text-decoration: none;

      &.active {
        color: white;
      }
    }
  }
`;
