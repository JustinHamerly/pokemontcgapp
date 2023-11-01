import axios from 'axios';

export const fetchAllCardData = async () => {
  const {data} = await axios({method: 'get', baseURL: process.env.COLLECTIONSERVER, url: '/all'});
  return data;
}
