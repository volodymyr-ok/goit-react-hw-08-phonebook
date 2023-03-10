import styled from 'styled-components';

export const StyledLogo = styled.h1`
  color: ${({ theme }) => theme.logoText};
  text-align: center;
  font-size: 22px;
  font-family: 'Laila', sans-serif;
  margin-left: 10px;

  ::before {
    content: '';
    position: fixed;
    z-index: -1;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    transform: translate(-31%, -12%);
    background-color: ${({ theme }) => theme.logoBG};
  }
`;
