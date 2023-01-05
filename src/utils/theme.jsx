import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.mainTextColor};
    transition: background 0.25s ease-in-out, color 0.25s ease-in-out;
  }
`;

export const darkTheme = {
  mainColor: '#b6baff',
  minorColor: '#222327',
  mainTextColor: '#fff',

  bgColor: '#222327',
  mainBorder: '#d3d5ff40',

  inputText: '#7f86ff',
  headerBG: '#25262d',

  backdropBg: '#2f303dcc',
  modalBg: '#25262d',

  btnText: '#222327',
  deleteContactBtn: '#cc4343',

  darkThemeBtnBg: '#46475c',

  editIcon: '#fba831',
  callIcon: '#31fb91',
  deleteIcon: '#fb3131',

  mainTransparent: '#b6baff14',
  gold: '#ffd15b',
  noBtn: '#a72a33',
  yesBtn: '#37a94e',
};

export const lightTheme = {
  mainColor: '#b6baff',
  minorColor: '#222327',
  mainTextColor: '#222327',

  bgColor: '#ffffff',
  mainBorder: '#d3d5ff40',

  inputText: '#7f86ff',
  headerBG: '#25262d',

  backdropBg: '#2f303dcc',
  modalBg: '#25262d',

  btnText: '#222327',
  deleteContactBtn: '#cc4343',

  darkThemeBtnBg: '#46475c',

  editIcon: '#fba831',
  callIcon: '#31fb91',
  deleteIcon: '#fb3131',

  mainTransparent: '#b6baff14',
  gold: '#ffd15b',
  noBtn: '#a72a33',
  yesBtn: '#37a94e',
};

// export const colors = lightTheme;
export const colors = darkTheme || lightTheme;
