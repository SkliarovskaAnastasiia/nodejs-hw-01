import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
// import { readContacts } from './readContacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    //     const data = await readContacts();
    //     const newData =
    //       updatedContacts.length === 0
    //         ? updatedContacts
    //         : [...data, ...updatedContacts];

    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts), 'utf8');
  } catch (error) {
    console.log('File writing error:', error);
  }
};
