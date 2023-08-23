import { Component } from 'react';
import { Header, Form, Button, Label, Input } from './searchbar.styled';
import { FaSearch } from 'react-icons/fa';

import PropTypes from 'prop-types';

class Searchbar extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    this.props.onSubmit(form.elements.search.value);
  };

  render() {
    return (
      <Header className="searchbar">
        <Form className="form" onSubmit={this.handleSubmit}>
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
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
