import styled from 'styled-components';
import { colors } from 'utils/theme';

export const StyledUserMenuDiv = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 320px;

  .user-menu-btn {
    color: ${colors.text};
    background-color: transparent;
    border: 1px solid transparent;

    svg {
      transform: rotateZ(0deg);
      transition: all 250ms linear;
    }

    :hover .settings-icon,
    :focus .settings-icon {
      transform: rotateZ(90deg);
      color: ${colors.mainColor};
    }
  }

  .user-menu-modal {
    position: absolute;
    top: 60px;
    right: 0px;

    z-index: -1;
    padding: 15px;
    /* width: 150px; */
    background-color: ${colors.backdropBg};
    border: 1px solid ${colors.mainBorder};
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 15px;

    transform: scale(0);
    /* transform: translateY(-100%); */
    pointer-events: none;
    opacity: 0;

    transition-property: all;
    transition-timing-function: ease-in-out;
    transition-duration: 250ms;

    &.opened {
      pointer-events: all;
      transform: scale(1);
      /* transform: translateY(0); */
      opacity: 1;
    }

    button {
      height: 30px;
      width: 90px;
      justify-content: space-around;

      font-size: 14px;
    }

    .logout-btn {
      /* background-color: transparent; */
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
  }
`;
