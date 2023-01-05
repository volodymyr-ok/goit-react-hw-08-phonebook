import { StyledForm, StyledH2 } from 'utils/commonStyles';
import { useState } from 'react';
import { logIn } from 'redux/authOperations';
import { useDispatch } from 'react-redux';
import { StyledLoginDiv } from './LoginForm.styled';

export const LoginForm = () => {
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
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <StyledLoginDiv>
      <StyledH2>Sign in your account</StyledH2>

      <StyledForm onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </label>
        <button type="sumbit">Log in</button>
      </StyledForm>
    </StyledLoginDiv>
  );
};
