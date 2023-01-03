import { useSelector } from 'react-redux';
import { selectUserName } from 'redux/selectors';
import { Btn } from 'utils/commonStyles';
import { StyledUserMenuDiv } from './UserMenu.styled';
import { RiSettings3Line } from 'react-icons/ri';
import { Logo } from 'components/Logo/Logo';

export const UserMenu = () => {
  const userName = useSelector(selectUserName);

  const toggleUserMenu = () => {
    document.querySelector('.user-menu-backdrop').classList.toggle('shown');
  };

  return (
    <StyledUserMenuDiv>
      <Logo />

      <Btn className="user-menu-btn" onClick={toggleUserMenu}>
        {userName}
        <RiSettings3Line size={22} className="settings-icon" />
      </Btn>
    </StyledUserMenuDiv>
  );
};
