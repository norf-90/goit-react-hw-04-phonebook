export const filterContacts = (contacts, filter) => {
  //   if (!filter) {
  //     return contacts;
  //   } else {
  return contacts.filter(({ name }) => {
    return name.toLowerCase().includes(filter.toLowerCase());
  });
  //   }
};
