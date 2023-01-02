import styled from 'styled-components';

export const StyledUL = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

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
    color: #b6baff;
    text-align: center;
    text-transform: uppercase;
  }
`;
