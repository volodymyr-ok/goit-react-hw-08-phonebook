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
  darkThemeTogglerHover: 'transparent',
  darkThemeIcon: '#b6baff',
  darkThemeIconHover: '#46475c',
  darkIconScale: '1',

  lightThemeToggler: 'transparent',
  lightThemeTogglerHover: '#46475c',
  lightThemeIcon: '#46475c',
  lightThemeIconHover: '#b6baff',
  lightIconScale: '1.5',

  mainTransparent: '#b6baff14',

  editIcon: '#fba831',
  callIcon: '#31fb91',
  deleteIcon: '#fb3131',

  noBtnBG: '#b53d45',
  noBtnText: '#fff',
  noBtnBorder: '#b53d45',

  yesBtnBG: '#429352',
  yesBtnText: '#fff',
  yesBtnBorder: '#429352',

  inputHoverLine: '#b6baff',
  filterInputBG: '#b6baff14',
  mainBorder: '#d3d5ff40',

  submitContactBtnBG: '#b6baff',
  submitContactBtnText: '#222327',
  submitContactBtnBorder: '#b6baff',

  enterBtnBG: '#b6baff',
  enterBtnBGHover: 'transparent',

  enterBtnText: '#222327',
  enterBtnTextHover: 'inherit',

  enterBtnBorder: '#b6baff',
  enterBtnBorderHover: '#b6baff',

  // -------------------------

  mainColor: '#b6baff',
  minorColor: '#222327',
  mainTextColor: '#222327',
  minorTextColor: '#fff',

  inputText: '#7f86ff',
  bgColor: '#222327',
  backdropBg: '#2f303dcc',
  modalBg: '#25262d',

  deleteContactBtn: '#cc4343',
  btnText: '#222327',
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
  darkThemeTogglerHover: '#46475c',
  darkThemeIcon: 'inherit',
  darkThemeIconHover: '#fff',
  darkIconScale: '1.5',

  lightThemeToggler: '#46475c',
  lightThemeTogglerHover: 'transparent',
  lightThemeIcon: '#ffffff',
  lightThemeIconHover: '#46475c',
  lightIconScale: '1',

  mainTransparent: '#656565d1',

  editIcon: '#e98800',
  callIcon: '#007338',
  deleteIcon: '#fb3131',

  noBtnBG: '#b53d45',
  noBtnText: '#fff',
  noBtnBorder: '#b53d45',

  yesBtnBG: '#429352',
  yesBtnText: '#fff',
  yesBtnBorder: '#429352',

  inputHoverLine: '#b6baff',
  filterInputBG: '#e9ecff',
  mainBorder: '#d3d5ff',

  submitContactBtnBG: '#fff',
  submitContactBtnText: 'inherit',
  submitContactBtnBorder: '#fff',

  enterBtnBG: '#b6baff',
  enterBtnBGHover: '#f7f7f775',

  enterBtnText: '#222327',
  enterBtnTextHover: '#b6baff',

  enterBtnBorder: '#b6baff',
  enterBtnBorderHover: '#b6baff',

  // -------------------------

  mainColor: '#222327',
  minorColor: '#b6baff',
  mainTextColor: '#fff',
  minorTextColor: '#222327',

  bgColor: '#ffffff',
  inputText: '#7f86ff',
  modalBg: '#b6baff',
  backdropBg: '#707294cc',

  deleteContactBtn: '#cc4343',
  btnText: '#222327',
};
