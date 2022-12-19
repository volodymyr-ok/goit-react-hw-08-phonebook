import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/authOperations';
import { selectUserName } from 'redux/selectors';
import { StyledBtn } from 'utils/theme';
import { StyledUserMenuDiv } from './UserMenu.styled';

export const UserMenu = () => {
  const userName = useSelector(selectUserName);

  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <StyledUserMenuDiv>
      <p>{userName}</p>
      <StyledBtn type="button" onClick={handleLogOut}>
        LogOut
      </StyledBtn>
    </StyledUserMenuDiv>
  );
};
