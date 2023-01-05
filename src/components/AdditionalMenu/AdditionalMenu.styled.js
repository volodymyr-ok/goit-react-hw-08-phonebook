import styled from 'styled-components';

export const Menu = styled.ul`
  position: absolute;
  bottom: 47px;
  right: 3px;
  z-index: 1;

  display: flex;
  flex-direction: column;

  padding: 0 5px;
  transform: translate(0%, 20%);
  opacity: 0;
  pointer-events: none;
  transition: all 250ms ease-in-out;

  border-radius: 5px;
  border-bottom-right-radius: 0;
  border: 1px solid ${({ theme }) => theme.mainBorder};
  background-color: ${({ theme }) => theme.modalBg};

  &.opened {
    pointer-events: all;
    opacity: 1;
    transform: translate(0, 0);
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;

    min-height: 40px;
    padding: 10px 5px;
    background-color: transparent;
    border: none;

    color: ${({ theme }) => theme.mainColor};
    font-size: 18px;

    cursor: pointer;

    :hover,
    :focus {
      color: ${({ theme }) => theme.minorTextColor};
    }

    a {
      width: 100%;
      height: 100%;
      text-decoration: none;
      color: inherit;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
    }
  }

  li:not(:last-child) {
    border-bottom: 2px solid ${({ theme }) => theme.mainBorder};
  }

  .editIcon {
    color: ${({ theme }) => theme.editIcon};
  }
  .callIcon {
    color: ${({ theme }) => theme.callIcon};
  }
  .deleteIcon {
    color: ${({ theme }) => theme.deleteIcon};
  }
`;
