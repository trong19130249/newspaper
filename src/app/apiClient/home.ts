import {axiosClient} from '../configs/index';
export const homeApi= {
    getDataHome() {
        return axiosClient.get('home.rss');
    },getDataXaHoi() {
        return axiosClient.get('xa-hoi-2.rss');
    }
}