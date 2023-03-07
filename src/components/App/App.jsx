import React, { Component } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import FilterForm from 'components/FilterForm/FilterForm';
import ContactList from 'components/ContactList/ContactList';
import { Layout, MainTitle, SecondaryTitle, GlobalStyles } from '.';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    const { contacts } = this.state;

    if (contacts.length !== parsedContacts?.length) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (values, { resetForm }) => {
    const { contacts } = this.state;
    const { name, number } = values;
    const isNameAlreadyExist = Boolean(
      contacts.find(contact => contact.name === name)
    );

    resetForm();

    if (isNameAlreadyExist) {
      alert(`${name} is already in contacts.`);
      return;
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { id: nanoid(), name, number }],
      };
    });
  };

  filterContacts = () => {
    const { filter } = this.state;
    const { contacts } = this.state;
    return contacts.filter(({ name }) => {
      return name.toLocaleLowerCase().includes(filter.toLocaleLowerCase());
    });
  };

  deleteContact = name => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.name !== name);
    this.setState({ contacts: newContacts });
  };

  render() {
    const renderData = this.filterContacts();

    return (
      <>
        <Layout>
          <MainTitle>Phonebook</MainTitle>
          <ContactForm handleSubmit={this.handleSubmit} />
          <SecondaryTitle>Contacts</SecondaryTitle>
          <FilterForm onChange={this.handleChange} />
          <ContactList renderData={renderData} onDelete={this.deleteContact} />
        </Layout>
        <GlobalStyles />
      </>
    );
  }
}

export default App;
