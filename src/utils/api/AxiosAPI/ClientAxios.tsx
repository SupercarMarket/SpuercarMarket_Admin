import axios, { AxiosError } from "axios";
import { getCookie } from "../CustomCookies/CustomCookies";

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
    const refreshToken = getCookie("refresh_token");
    const accessToken = localStorage.getItem("access_token");
    // refresh token, access token save
    if( refreshToken && accessToken ){
        config.headers.ACCESS_TOKEN = accessToken;
        config.headers.REFRESH_TOKEN = refreshToken;
    }

    if( refreshToken ){
        try{
            await axios.post(`${URL}/user/get-token`, {},
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
            if (response.status === 501) {
              localStorage.setItem(
                "access_token",
                response.headers.access_token
              );
              config.headers.ACCESS_TOKEN = response.headers.access_token;
            } else if (response.status === 405) {
              console.log((response.data as unknown as Error405Type).error);
            }
          }
        }
    }
    return config;
})

export default ClientAxios;