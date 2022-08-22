import {axiosClient} from '../configs/index';
export const homeApi= {
    getDataHome() {
        return axiosClient.get('home.rss');
    },getData(url:string) {
        return axiosClient.get(url);
    },getDataXaHoi() {
        return axiosClient.get('xa-hoi-2.rss');
    }
    ,getDataChinhTri(){
        return axiosClient.get('chinh-tri-308.rss');
    },getDataTinTuc(){
        return axiosClient.get('xa-hoi-tin-tuc-104.rss');
    },getDataPhongSu(){
        return axiosClient.get('xa-hoi-phong-su-13.rss');
    },getDataKinhte(){
        return axiosClient.get('kinh-te-3.rss');
    },getDataSucKhoe(){
        return axiosClient.get('suc-khoe-210.rss');
    },getDataTheGioi(){
        return axiosClient.get('the-gioi-5.rss');
    },getDataGioiTre(){
        return axiosClient.get('gioi-tre-4.rss');
    },getDataTaiNangTre(){
        return axiosClient.get('tai-nang-tre-295.rss');
    },getDataPhapLuat(){
        return axiosClient.get('phap-luat-12.rss');
    },getDataTheThao(){
        return axiosClient.get('the-thao-11.rss');
    },getDataGiaiTri(){
        return axiosClient.get('giai-tri-36.rss');
    },getDataSao(){
        return axiosClient.get('sao-35.rss');
    },getDataHauTruongSao(){
        return axiosClient.get('xa-hoi-2.rss');
    },getDataVideo(){
        return axiosClient.get('xa-hoi-2.rss');
    },getDataDep(){
        return axiosClient.get('xa-hoi-2.rss');
    }
}