import styled from 'styled-components';

export const StyledUL = styled.ul`
  display: flex;
  align-items: center;
  height: 40px;
  width: 320px;

  li:first-child {
    margin-right: auto;
  }
  li {
    a {
      font-size: 20px;
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
        color: ${({ theme }) => theme.minorTextColor};
      }
      &:not(.active):hover,
      &:not(.active):focus {
        color: ${({ theme }) => theme.mainColor};
      }
    }
  }
`;
