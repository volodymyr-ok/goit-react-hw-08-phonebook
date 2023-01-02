import styled from 'styled-components';
import { colors } from 'utils/theme';

export const StyledWrapper = styled.div`
  margin: 0 auto;
  width: auto;
  max-width: 320px;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;

  &.opend .creator-btn {
    /* background-color: ${colors.darkTransparent};
    color: ${colors.mainBlue}; */
    background-color: ${colors.darkTransparent};
    /* color: ${colors.mainBlue}; */
    border: 1px solid ${colors.darkTransparent};
  }

  .creator-btn {
    /* margin-left: auto; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;

    /* height: 35px; */
    width: 250px;
    padding: 5px 10px;
    outline: none;
    border-radius: 5px;

    /* border: 1px solid ${colors.mainBlue};
    background-color: ${colors.mainBlue}; */
    border: 1px solid ${colors.mainBorder};
    background-color: ${colors.darkTransparent};
    color: white;

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
    transform: translateY(-110%);
    transition-property: transform, margin;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    &.opend {
      margin-top: 15px;
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
