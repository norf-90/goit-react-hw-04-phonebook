export function getContacts() {
  const localContacts = localStorage.getItem('contacts');
  return localContacts ? JSON.parse(localContacts) : [];
}
