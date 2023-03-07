import apiClient from './apiClient';

export const getProducts = async () => {
  return await apiClient({
    method: 'get',
    url: '/mock/mock_data.json',
  });
};
