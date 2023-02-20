import ClientAxios from "../AxiosAPI/ClientAxios"
import { AxiosError } from "axios";
import { setCookie } from "../CustomCookies/CustomCookies";
import { LoginType } from "../../../types/LoginType";

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
        setCookie( LoginType.refresh as string, response.headers.refresh_token, { path:'/', secure:true} );
        setCookie( LoginType.access as string, response.headers.access_token, {path:"/", secure:true} );
        console.log( response.data );    
    }else if( response?.status === 415 ){
        alert( response.data.message );
    }else if( response?.status === 500 ){
        alert( response?.data.message );
    }
}