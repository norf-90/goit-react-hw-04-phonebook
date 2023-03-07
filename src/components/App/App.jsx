import { useState, useEffect } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import FilterForm from 'components/FilterForm/FilterForm';
import ContactList from 'components/ContactList/ContactList';
import { Layout, MainTitle, SecondaryTitle, GlobalStyles } from '.';
import { nanoid } from 'nanoid';
// import utils
import { getContacts } from 'components/utils/getContacts';
import { filterContacts } from 'components/utils/filterContacts';

const App = () => {
  const [contacts, setContacts] = useState(getContacts);
  const [filter, setFilter] = useState('');
  const [renderData, setRenderData] = useState(contacts);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    setRenderData(filterContacts(contacts, filter));
  }, [filter, contacts]);

  const deleteContact = name => {
    const newContacts = contacts.filter(contact => contact.name !== name);
    setContacts(newContacts);
  };

  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;
    const isNameAlreadyExist = Boolean(
      contacts.find(contact => contact.name === name)
    );

    resetForm();

    if (isNameAlreadyExist) {
      alert(`${name} is already in contacts.`);
      return;
    }
    setContacts(prevContacts => [
      ...prevContacts,
      { id: nanoid(), name, number },
    ]);
  };

  const handleChangeFilter = ({ currentTarget: { value } }) => {
    setFilter(value);
  };

  return (
    <>
      <Layout>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm handleSubmit={handleSubmit} />
        <SecondaryTitle>Contacts</SecondaryTitle>
        <FilterForm onChange={handleChangeFilter} />
        <ContactList renderData={renderData} onDelete={deleteContact} />
      </Layout>
      <GlobalStyles />
    </>
  );
};

export default App;
