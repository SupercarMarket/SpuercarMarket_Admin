import { NavigateFunction } from "react-router";
import axios, { AxiosError } from "axios";
import { setCookie } from "../CustomCookies/CustomCookies";
import { LoginType } from "../../../types/LoginType";

const URL = process.env.REACT_APP_ADMIN_SERVER_URL;

export const AmdinLoginHanlder = async ( email : string, password : string ) => {
    try{
        return await axios.post(`${URL}login`, { email : email, password : password } );
    }catch( error ){
        const { response } = error as unknown as AxiosError;
        console.log( response );
        return response;
    }
};

export const LoginHandler = async ( email : string, password : string, navigate : NavigateFunction ) => {
    const response = await AmdinLoginHanlder( email, password );
    if( response?.status === 200 ){
        setCookie( LoginType.refresh as string, response.headers.refresh_token, { path:'/', secure:true} );
        setCookie( LoginType.access as string, response.headers.access_token, {path:"/", secure:true} );
        navigate("/salelist");
    }else if( response?.status === 415 ){
        alert( response.data.message );
    }else if( response?.status === 414 ){
        alert( '비밀번호가 틀렸습니다.' );
    }
}