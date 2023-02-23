import axios, { AxiosError } from "axios";
import { getCookie, removeCookie, setCookie } from "../CustomCookies/CustomCookies";
import { LoginType } from "../../../types/LoginType";
import { NavigateFunction, useNavigate } from "react-router";

const URL = process.env.REACT_APP_ADMIN_SERVER_URL;

interface Error405Type {
    error: string;
    path?: string;
    status?: number;
    timestamp?: string;
};

const ClientAxios = axios.create({
    baseURL: `${URL}`
});

//interceptor request
ClientAxios.interceptors.request.use( async ( config ) => {
    const refreshToken = getCookie(LoginType.refresh as string);
    const accessToken = getCookie(LoginType.access as string);
    // refresh token, access token save
    if( refreshToken && accessToken ){
        config.headers.ACCESS_TOKEN = accessToken;
        config.headers.REFRESH_TOKEN = refreshToken;
    }

    if( refreshToken ){
        try{
            await axios.post(`${URL}user/get-token`, {},
            {
                headers:{
                    ACCESS_TOKEN: accessToken,
                    REFRESH_TOKEN : refreshToken
                }
            });
        }catch( error ){
          const { response } = error as unknown as AxiosError;
          if (response) {
            /*
                response.status = 405, Method Not Allow
                response.status = 501, access token refresh
            */
            if (response.status === 425 ) {
              setCookie( LoginType.access as string, response.headers.access_token, { path:"/", secure: true});
              config.headers.ACCESS_TOKEN = response.headers.access_token;
            } else {
              console.log((response.data as unknown as Error405Type).error);
              if( response.status === 422 ){
                alert('로그인 사용 정보가 만료되었습니다. 재 로그인해주세요.');
                removeCookie( LoginType.refresh as string, { path : "/" } );
                removeCookie( LoginType.access as string, { path : "/" } );
              }
            }
          }
        }
    }
    return config;
})

export default ClientAxios;