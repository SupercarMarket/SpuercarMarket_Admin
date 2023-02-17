import ClientAxios from "../AxiosAPI/ClientAxios"
import { AxiosError } from "axios";
import { setCookie } from "../CustomCookies/CustomCookies";

export const AmdinLoginHanlder = async ( email : string, password : string ) => {
    try{
        return await ClientAxios.post('login', { email : email, password : password } );
    }catch( error ){
        const { response } = error as unknown as AxiosError;
        return response;
    }
};

export const LoginHandler = async ( email : string, password : string ) => {
    const response = await AmdinLoginHanlder( email, password );
    if( response?.status === 200 ){
        setCookie("refresh_token", response.headers.refresh_token, { path:'/', secure:true} );
        localStorage.setItem("access_token", response.headers.access_token );
    }else if( response?.status === 415 ){
        alert( response.data.message );
    }else if( response?.status === 500 ){
        alert( response?.data.message );
    }
}