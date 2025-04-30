import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const allContacts = await readContacts();
    return allContacts.length;
  } catch (error) {
    console.log('Count error:', error);
  }
};

console.log(await countContacts());
