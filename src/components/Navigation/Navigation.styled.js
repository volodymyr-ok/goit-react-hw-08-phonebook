import styled from 'styled-components';

export const StlyledHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;

  display: flex;
  flex-direction: row;
  justify-content: center;

  background-color: ${({ theme }) => theme.headerBG};
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  box-shadow: 0px 1px 5px 0px ${({ theme }) => theme.mainTransparent};

  padding: 15px;
  margin-bottom: 15px;
`;
