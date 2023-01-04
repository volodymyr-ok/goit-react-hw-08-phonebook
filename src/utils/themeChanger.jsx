export const themeChanger = theme => {
  console.log('theme', theme);

  switch (theme) {
    case 'dark':
      return {
        mainColor: '#b6baff',
        minorColor: '#222327',

        bgColor: '#222327',
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
    case 'light':
      return {
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
    default:
      return {};
  }
};

// export const themeChanger = theme => {
//   const darkTheme = {
//     mainColor: '#b6baff',
//     minorColor: '#222327',

//     bgColor: '#222327',
//     mainBorder: '#d3d5ff40',

//     inputText: '#7f86ff',
//     headerBG: '#25262d',

//     // backdropBg: '#2f303df7',
//     backdropBg: '#2f303dcc',
//     modalBg: '#25262d',

//     btnText: '#222327',
//     deleteContactBtn: '#cc4343',

//     darkThemeBtnBg: '#46475c',

//     editIcon: '#fba831',
//     callIcon: '#31fb91',
//     deleteIcon: '#fb3131',

//     darkTransparent: '#b6baff14',
//     text: 'white',
//     gold: '#ffd15b',
//     noBtn: '#a72a33',
//     yesBtn: '#37a94e',
//     white: '#fff',
//   };

//   const lightTheme = {
//     mainColor: '#b6baff',
//     minorColor: '#222327',

//     bgColor: '#ffffff',
//     mainBorder: '#d3d5ff40',

//     inputText: '#7f86ff',
//     headerBG: '#25262d',

//     // backdropBg: '#2f303df7',
//     backdropBg: '#2f303dcc',
//     modalBg: '#25262d',

//     btnText: '#222327',
//     deleteContactBtn: '#cc4343',

//     darkThemeBtnBg: '#46475c',

//     editIcon: '#fba831',
//     callIcon: '#31fb91',
//     deleteIcon: '#fb3131',

//     darkTransparent: '#b6baff14',
//     text: 'white',
//     gold: '#ffd15b',
//     noBtn: '#a72a33',
//     yesBtn: '#37a94e',
//     white: '#fff',
//   };

//   switch (theme) {
//     case 'dark':
//       return darkTheme;
//     case 'light':
//       return lightTheme;
//     default:
//       return;
//   }
// };
