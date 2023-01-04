// import storage from 'redux-persist/lib/storage';
// console.log(storage.getItem('persist:theme'));
// const foo = async () => {
//   const response = await storage.getItem('persist:theme');
//   if (response.includes('dark')) {
//     return console.log('hello');
//   }
//   return console.log('goodby');
// };
// foo();

const darkTheme = {
  mainColor: '#b6baff',
  minorColor: '#222327',

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

  darkTransparent: '#b6baff14',
  text: 'white',
  gold: '#ffd15b',
  noBtn: '#a72a33',
  yesBtn: '#37a94e',
  white: '#fff',
};

const lightTheme = {
  mainColor: '#b6baff',
  minorColor: '#222327',

  bgColor: '#ffffff',
  mainBorder: '#d3d5ff40',

  inputText: '#7f86ff',
  headerBG: '#25262d',

  // backdropBg: '#2f303df7',
  backdropBg: '#2f303dcc',
  modalBg: '#25262d',

  btnText: '#222327',
  deleteContactBtn: '#cc4343',

  darkThemeBtnBg: '#46475c',

  editIcon: '#fba831',
  callIcon: '#31fb91',
  deleteIcon: '#fb3131',

  darkTransparent: '#b6baff14',
  text: 'white',
  gold: '#ffd15b',
  noBtn: '#a72a33',
  yesBtn: '#37a94e',
  white: '#fff',
};

export const colors = darkTheme || lightTheme;
