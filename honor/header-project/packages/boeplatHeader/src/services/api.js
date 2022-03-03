import { get } from '../utils/request.js';
// import serviceNameList from '@/config/default/service.config.js'
const customer = '/boeplat-customer'
const auth = '/boeplat-auth'
// header 菜单
export const getHeaderList = params => get(`${customer}/api/category/product/list`, params);
// header 角色切换-获取角色列表
export const getCompany = params => get(`${customer}/api/userCompanyRel/getCompany`, params);
// header切换
export const changeCompany = params => get(`${auth}/api/auth/changeCompany`, params);