import { FiltersForm } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { changeFilter } from 'redux/filterSlice';
import closeMenu from 'utils/additionalMenuClosing';

export const Filter = () => {
  const dipatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChanger = e => {
    dipatch(changeFilter(e.target.value.toLowerCase()));
  };

  return (
    <FiltersForm onClick={closeMenu}>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        type="text"
        onChange={e => handleChanger(e)}
        value={filter}
        id="filter"
      />
    </FiltersForm>
  );
};
