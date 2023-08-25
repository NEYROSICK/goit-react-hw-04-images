import { Header, Form, Button, Label, Input } from './searchbar.styled';
import { FaSearch } from 'react-icons/fa';
import { useContext } from 'react';
import { Context } from 'context/globalContext';

const Searchbar = () => {
  const { setQuery } = useContext(Context);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setQuery(form.elements.search.value);
  };

  return (
    <Header className="searchbar">
      <Form className="form" onSubmit={handleSubmit}>
        <Button type="submit" className="button">
          <Label className="button-label">Search</Label>
          <FaSearch size={20} />
        </Button>

        <Input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          name="search"
          placeholder="Search images and photos"
        />
      </Form>
    </Header>
  );
};

export default Searchbar;
