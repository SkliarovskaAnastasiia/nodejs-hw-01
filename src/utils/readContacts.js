import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
  try {
    const contactsData = await fs.readFile(PATH_DB, 'utf8');
    return JSON.parse(contactsData);
  } catch (error) {
    console.log('File reading error:', error);
  }
};

// readContacts().then((data) => console.log(data));
