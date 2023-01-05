import styled from 'styled-components';

export const StyledUserMenuDiv = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 320px;

  .user-menu-btn {
    color: ${({ theme }) => theme.userBtnElems};
    background-color: transparent;
    border: 1px solid transparent;

    svg {
      transform: rotateZ(0deg);
      transition: all 250ms linear;
    }

    :hover .settings-icon,
    :focus .settings-icon {
      transform: rotateZ(90deg);
      color: ${({ theme }) => theme.settingsIcon};
    }
  }
`;
