import { axiosClient } from '../configs/index';
export const homeApi = {
  getDataHome() {
    return axiosClient.get('rss/home.rss');
  },
  getData(url: string) {
    return axiosClient.get(url);
  },
};
