import { StyledCenteredDiv, StyledForm, StyledH2 } from 'utils/theme';
import { useState } from 'react';
import { logIn } from 'redux/authOperations';
import { useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('email', email, 'password', password);
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <StyledCenteredDiv>
      <StyledH2>Sign in your account</StyledH2>

      <StyledForm onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button type="sumbit">Log in</button>
      </StyledForm>
    </StyledCenteredDiv>
  );
};

export default Login;
