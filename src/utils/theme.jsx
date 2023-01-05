import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.mainBG};
    color: ${({ theme }) => theme.mainText};
    transition: background 0.25s ease-in-out, color 0.25s ease-in-out;
  }
`;

// darkdarkdark
export const darkTheme = {
  mainAccent: '#b6baff',
  headerBG: '#25262d',

  mainBG: '#222327',
  mainText: '#fff',
  logoText: '#b6baff',
  logoBG: '#3b4b5c',
  userBtnElems: '#fff',
  settingsIcon: 'b6baff',
  userMenuBG: '#2f303dcc',
  userMenuBorder: '#d3d5ff40',
  userMenuBtnBG: '#ffffff0',
  userMenuBtnBorder: '#ffffff0',
  userMenuBtnBGHover: 'inherit',
  themeTogglerBG: '#d3d5ff40',
  darkThemeToggler: '#46475c',
  darkThemeIcon: '#b6baff',
  lightThemeToggler: 'transparent',
  lightThemeIcon: '#46475c',

  inputHoverLine: '#b6baff',
  filterInputBG: '#b6baff14',
  mainBorder: '#d3d5ff40',

  submitContactBtnBG: '#b6baff',
  submitContactBtnText: '#222327',
  submitContactBtnBorder: '#b6baff',

  // -----------------------------

  // -------------------------

  mainColor: '#b6baff',
  minorColor: '#222327',

  mainTextColor: '#222327',
  minorTextColor: '#fff',

  bgColor: '#222327',

  inputText: '#7f86ff',

  backdropBg: '#2f303dcc',
  modalBg: '#25262d',

  btnText: '#222327',
  deleteContactBtn: '#cc4343',

  editIcon: '#fba831',
  callIcon: '#31fb91',
  deleteIcon: '#fb3131',

  mainTransparent: '#b6baff14',
  noBtn: '#a72a33',
  yesBtn: '#37a94e',

  // logoText: '#b6baff',
};

// LIGHT_LIGHT_LIGHT_LIGHT_LIGHT
export const lightTheme = {
  mainAccent: '#b6baff',
  headerBG: '#b6baff',

  mainBG: '#fff',
  mainText: '#222327',
  logoText: '#254555',
  logoBG: '#f7f7f775',
  userBtnElems: '#222327',
  settingsIcon: '#fff',
  userMenuBG: '#b6baff91',
  userMenuBorder: '#a19f9f',
  userMenuBtnBG: '#b6baff',
  userMenuBtnBorder: '#fff',
  userMenuBtnBGHover: '#fff',
  themeTogglerBG: '#fff',
  darkThemeToggler: 'transparent',
  darkThemeIcon: 'inherit',
  lightThemeToggler: '#46475c',
  lightThemeIcon: '#ffffff',

  inputHoverLine: '#b6baff',
  filterInputBG: '#e9ecff',
  mainBorder: '#d3d5ff',

  submitContactBtnBG: '#fff',
  submitContactBtnText: 'inherit',
  submitContactBtnBorder: '#fff',

  // -----------------------------

  // -------------------------

  mainColor: '#222327',
  minorColor: '#b6baff',

  mainTextColor: '#fff',
  minorTextColor: '#222327',

  bgColor: '#ffffff',

  inputText: '#7f86ff',
  // headerBG: '#25262d',
  // modalBg: '#25262d',
  modalBg: '#b6baff',

  // backdropBg: '#2f303dcc',
  backdropBg: '#707294cc',

  btnText: '#222327',
  deleteContactBtn: '#cc4343',

  editIcon: '#e98800',
  callIcon: '#007338',
  deleteIcon: '#fb3131',

  mainTransparent: '#656565d1',
  noBtn: '#a72a33',
  yesBtn: '#37a94e',

  logoBg: '#f7f7f775',
  // logoText: '#fff',
};

export const colors = lightTheme;
// export const colors = darkTheme || lightTheme;
