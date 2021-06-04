import axios from 'axios';

export const getGames = async () => {
  try {
    const response = await axios.get('http://localhost:9000/games');
    return response.data;
  } catch (e) {
    return e;
  }
};

export const getGameDetail = async (id) => {
  try {
    const response = await axios.get(`http://localhost:9000/games/${id}`);
    return response.data;
  } catch (e) {
    return e;
  }
};
