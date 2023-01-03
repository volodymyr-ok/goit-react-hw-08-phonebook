import styled from 'styled-components';
import { colors } from 'utils/theme';

export const StyledUL = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  .empty-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-height: 100vh;
    height: auto;
    width: 100%;
    gap: 5px;
    padding: 15px 0;
    color: ${colors.mainColor};
    text-align: center;
    text-transform: uppercase;
  }
`;
