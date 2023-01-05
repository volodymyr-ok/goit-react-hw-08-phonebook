import styled from 'styled-components';

export const StyledRegisterDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;

  button {
    background-color: ${({ theme }) => theme.submitContactBtnBG};
    color: ${({ theme }) => theme.submitContactBtnText};
  }
`;
