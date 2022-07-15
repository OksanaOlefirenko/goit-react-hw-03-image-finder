import {
  Searchbox,
  SearchForm,
  SearchButton,
  SearchLabel,
  SearchInput,
} from './Searchbar.styled';
import { FaSearch } from 'react-icons/fa';

export const Searchbar = ({ onSubmit }) => {
  return (
    <Searchbox>
      <SearchForm>
        <SearchButton type="submit">
          <FaSearch size={20}></FaSearch>
          <SearchLabel>Search</SearchLabel>
        </SearchButton>

        <SearchInput
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Searchbox>
  );
};
