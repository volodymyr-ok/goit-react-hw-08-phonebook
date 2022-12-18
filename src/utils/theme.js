import styled from 'styled-components';

export const StyledH2 = styled.h2`
  font-size: 38px;
  margin-bottom: 15px;
  color: #b6baff;
  text-align: center;
`;

export const StyledForm = styled.form`
  margin: 0 auto 35px;
  max-width: 320px;
  text-align: center;

  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
    font-size: 22px;

    input {
      margin-top: 3px;
      border-radius: 5px;
      border: 1px solid #d3d5ff40;
      min-width: 250px;
      height: 35px;
      background-color: #b6baff14;
      color: #7f86ff;
      text-align: center;
      font-family: inherit;
      font-size: 20px;
      padding: 5px 10px;

      &:focus {
        background-color: #d3d5ff40;
        outline: none;
      }
    }
  }

  button {
    border-radius: 5px;
    border: 1px solid #b6baff;
    padding: 5px 10px;
    background-color: #b6baff;

    color: #222327;
    font-weight: 700;
    font-family: inherit;
    cursor: pointer;

    &:hover,
    &:focus {
      background-color: transparent;
      color: inherit;
    }
  }
`;

export const StyledBtn = styled.button`
  border-radius: 5px;
  border: 1px solid #b6baff;
  padding: 5px 10px;
  background-color: #b6baff;

  color: #222327;
  font-weight: 700;
  font-family: inherit;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: transparent;
    color: inherit;
  }
`;

// const theme = {
//   form: {
//     margin: '0 auto 35px',
//     maxWidth: '320px',
//     textAlign: 'center',
//   },
//   label: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginBottom: '15px',
//     fontSize: '22px',
//   },
//   input: {
//     marginTop: '3px',
//     borderRadius: '5px',
//     border: '1px solid #d3d5ff40',
//     minWidth: '250px',
//     height: '35px',
//     backgroundColor: '#b6baff14',
//     color: '#7f86ff',
//     textAlign: 'center',
//     fontFamily: 'inherit',
//     fontSize: '20px',
//     padding: '5px 10px',
//   },
// };
// export default theme;
