import styled from 'styled-components';
import { colors } from 'utils/theme';

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
        color: ${colors.mainTextColor};
      }
      &:not(.active):hover,
      &:not(.active):focus {
        color: ${colors.mainColor};
      }
    }
  }
`;
