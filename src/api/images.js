import axios from 'axios';

// axios.defaults.baseURL = 'https://pixabay.com/api';
// axios.defaults.headers['X-API-KEY'] = '37980943-b03ccb6ea553c94b671e9389e';
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '37980943-b03ccb6ea553c94b671e9389e';

export const getImages = async (query, page) => {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: 12,
    },
  });

  if (response.status !== 200) {
    throw new Error('smth went wrong');
  }

  return response.data;
};
