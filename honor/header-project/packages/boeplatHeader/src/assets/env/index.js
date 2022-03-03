const boe = {
  development: {
    VUE_APP_API_BASE_URL:"http://dev.boeplat.com.cn",
    VUE_APP_CLIENT_SECRET:"123456",
    VUE_APP_LOGIN_URL:"http://dev.boeplat.com.cn/html/sso-web?",
    VUE_APP_CLIENTID:"web_app",
    VUE_APP_RESPONSE_TYPE:"code",
    VUE_APP_REDIRECT_URI:"http://dev.boeplat.com.cn/html/ziconsole/preview",
    VUE_APP_GATEWAY_URI:"http://dev.boeplat.com.cn/service?",
    VUE_APP_ZCLOUD_URL:"http://dev.boeplat.com.cn",
    VUE_APP_NEW_ZCLOUD_URL:"http://dev.boeplat.com.cn/",
  },
  online: {
    VUE_APP_API_BASE_URL:"https://www.boeplat.com",
    VUE_APP_CLIENT_SECRET:"123456",
    VUE_APP_LOGIN_URL:"https://sso.boeplat.com/html/sso-web?",
    VUE_APP_CLIENTID:"web_app",
    VUE_APP_RESPONSE_TYPE:"code",
    VUE_APP_REDIRECT_URI:"https://www.boeplat.com/html/ziconsole/preview",
    VUE_APP_GATEWAY_URI:"https://www.boeplat.com/service?",
    VUE_APP_ZCLOUD_URL:"https://www.boeplat.com",
    VUE_APP_NEW_ZCLOUD_URL:"https://www.boeplat.com/",
  },
  test: {
    VUE_APP_API_BASE_URL:"http://www.boeplat.com.cn",
    VUE_APP_CLIENT_SECRET:"123456",
    VUE_APP_LOGIN_URL:"http://www.boeplat.com.cn/html/sso-web?",
    VUE_APP_CLIENTID:"web_app",
    VUE_APP_RESPONSE_TYPE:"code",
    VUE_APP_REDIRECT_URI:"http://www.boeplat.com.cn/html/ziconsole/preview",
    VUE_APP_GATEWAY_URI:"http://www.boeplat.com.cn/service?",
    VUE_APP_ZCLOUD_URL:"http://www.boeplat.com.cn",
    VUE_APP_NEW_ZCLOUD_URL:"http://www.boeplat.com.cn/",
  }
}
export default boe;