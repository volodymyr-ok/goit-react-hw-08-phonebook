import styled from 'styled-components';

export const StyledUL = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 320px;

  li {
    a {
      font-size: 22px;
      color: white;
      font-family: inherit;
      text-decoration: none;

      display: flex;
      align-items: center;
      gap: 5px;

      &.active {
        display: none;
      }
      &:not(.active) {
        color: white;
      }
      &:not(.active):hover,
      &:not(.active):focus {
        color: #b6baff;
      }
    }
  }
`;
