import { StyledForm, StyledH2 } from 'utils/commonStyles';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/authOperations';
import { StyledRegisterDiv } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
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
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <StyledRegisterDiv>
      <StyledH2>Create your account</StyledH2>

      <StyledForm onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </label>

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
        <button id="register-btn" type="sumbit">
          Register
        </button>
      </StyledForm>
    </StyledRegisterDiv>
  );
};
