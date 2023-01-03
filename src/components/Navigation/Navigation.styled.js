import styled from 'styled-components';
import { colors } from 'utils/theme';

export const StlyledHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;

  display: flex;
  flex-direction: row;
  justify-content: center;

  background-color: ${colors.headerBG};

  padding: 15px;
  margin-bottom: 15px;
`;
