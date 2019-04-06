import axios from 'axios';

export const getCustomers = () => {
  return axios.get(`/customers`);
};


export const getPrices = (id, items) => {
  return axios.put(`/customers/${id}/prices`, items);
}