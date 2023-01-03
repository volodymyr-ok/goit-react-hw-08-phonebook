import styled from 'styled-components';
import { colors } from 'utils/theme';

export const StyledWrapper = styled.div`
  position: fixed;
  z-index: 1;
  bottom: 0;
  right: 0;

  box-shadow: 0px -1px 5px 0px ${colors.darkTransparent};
  background-color: ${colors.modalBg};
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;

  padding: 15px;
  margin: 0 auto;
  width: 100%;
  min-height: 70px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &.opened {
    /* padding: 15px; */
    gap: 15px;
  }

  &.opend .creator-btn {
    /* background-color: ${colors.modalBg};
    border: 1px solid ${colors.modalBg}; */
  }

  .creator-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;

    width: 250px;
    padding: 5px 10px;
    outline: none;
    border-radius: 5px;

    border: 1px solid ${colors.mainBorder};
    background-color: transparent;
    color: ${colors.mainColor};

    font-size: 20px;
    font-weight: 500;
    font-family: inherit;
  }

  .creator-wrap {
    max-height: 0;
    overflow: hidden;

    transition: max-height 0.25s ease-in-out;
    transition-timing-function: ease-in-out;

    &.opend {
      max-height: 308px;
    }
  }

  #creator {
    transform: translateY(100%);
    transition: all 250ms ease-in-out;
    /* transition-property: transform, margin;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); */

    &.opend {
      margin-bottom: 15px;
      transform: translateY(0%);
    }
  }

  .submit-btn {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 5px;

    font-size: 18px;
    font-weight: 500;
  }
`;
