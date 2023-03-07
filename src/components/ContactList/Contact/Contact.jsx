import React from 'react';
import PropTypes from 'prop-types';
import {
  ListItem,
  ContactName,
  ContactNumber,
  DeleteButton,
} from './Contact.styled';

const Contact = props => {
  const { name, number, onDelete } = props;

  const onClick = () => {
    onDelete(name);
  };

  return (
    <ListItem>
      <ContactName>{name}</ContactName>
      <ContactNumber>{number}</ContactNumber>
      <DeleteButton type="button" onClick={onClick}>
        X
      </DeleteButton>
    </ListItem>
  );
};
Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact;
