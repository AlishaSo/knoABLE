import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

async function getListNames() {
  try {
    const names = await axios.get(`${BASE_URL}lists/names.json?api-key=${API_KEY}`);
    return names.data.results;
  } catch (error) {
    console.error(error);
  }
}

 async function search(title, publisher, author, isbn) {
  try {
    const names = await axios.get(`${BASE_URL}lists/best-sellers/history.json?${title && `title=${title}&`}${publisher && `publisher=${publisher}&`}${author && `author=${author}&`}${isbn && `isbn=${isbn}&`}api-key=${API_KEY}`);
    return names.data.results;
  } catch (error) {
    console.error(error);
  }
}

export {getListNames, search};