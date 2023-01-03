import styled from 'styled-components';
import { colors } from 'utils/theme';

export const Backdrop = styled.div`
  position: fixed;
  background-color: transparent;
  z-index: 3;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: start;

  opacity: 0;
  pointer-events: none;
  /* transform: scale(0); */

  transition: all 250ms ease-in-out;

  &.shown {
    /* transform: scale(1); */
    pointer-events: all;
    opacity: 1;
  }

  .modal-container {
    width: 320px;
    display: flex;
  }

  .user-menu-modal {
    margin: 75px 11px 0 auto;

    height: fit-content;
    padding: 15px;
    background-color: ${colors.backdropBg};
    border: 1px solid ${colors.mainBorder};
    border-radius: 5px;

    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 15px;

    opacity: 0;
    transform: translateY(-35%);
    pointer-events: none;

    transition: all 250ms ease-in-out;
  }

  &.shown .user-menu-modal {
    transform: translateY(0);
    pointer-events: all;
    opacity: 1;
  }

  button {
    height: 30px;
    width: 90px;
    justify-content: space-around;

    font-size: 14px;
  }

  .logout-btn {
    border: 1px solid transparent;
    :hover,
    :focus {
      border: 1px solid ${colors.mainBorder};
    }
  }

  .theme-toggle {
    padding: 0;
    gap: 0;
    background-color: transparent;
    border: transparent;

    span {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 45px;
      height: 30px;
    }

    .dark.active {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      background-color: ${colors.darkThemeBtnBg};
      color: ${colors.mainColor};
    }

    .light {
      background-color: ${colors.mainColor};
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }
`;
