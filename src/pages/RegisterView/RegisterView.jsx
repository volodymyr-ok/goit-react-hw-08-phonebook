import { StyledCenteredDiv, StyledForm, StyledH2 } from 'utils/commonStyles';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/authOperations';

const RegisterView = () => {
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
    <StyledCenteredDiv>
      <StyledH2>Create your account</StyledH2>

      <StyledForm onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>

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
        <button type="sumbit">Register</button>
      </StyledForm>
    </StyledCenteredDiv>
  );
};

export default RegisterView;
