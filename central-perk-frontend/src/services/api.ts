import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/users';

export const fetchCustomerData = async () => {
  const response = await axios.get(API_URL);
  return response.data.map((user: any) => ({
    id: user.id,
    name: `${user.name.firstname} ${user.name.lastname}`,
    points: Math.floor(Math.random() * 500), 
  }));
};
