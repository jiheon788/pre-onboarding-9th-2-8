import { axiosInstance } from '@/api/client';

const productApi = {
  getProducts: async () => {
    const { data } = await axiosInstance.get('/mock/mock_data.json');
    return data;
  },
};

export default productApi;
