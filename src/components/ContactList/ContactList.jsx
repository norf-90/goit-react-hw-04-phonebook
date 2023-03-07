import React from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact/Contact';
import { List } from './ContactList.styled';

const ContactList = props => {
  const { renderData, onDelete } = props;
  return (
    <List>
      {renderData.map(({ id, name, number }) => (
        <Contact key={id} name={name} number={number} onDelete={onDelete} />
      ))}
    </List>
  );
};

ContactList.propTypes = {
  renderData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,

  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
