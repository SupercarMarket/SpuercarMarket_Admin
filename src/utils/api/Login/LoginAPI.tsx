import { NavigateFunction } from "react-router";
import axios, { AxiosError } from "axios";
import { setCookie, getCookie } from "../CustomCookies/CustomCookies";
import { LoginType } from "../../../types/LoginType";

const URL = process.env.REACT_APP_ADMIN_SERVER_URL;

const AmdinLoginHanlder = async (email: string, password: string) => {
  try {
    return await axios.post(`${URL}login`, {
      email: email,
      password: password,
    });
  } catch (error) {
    const { response } = error as unknown as AxiosError;
    console.log(response);
    return response;
  }
};

// test
// gltlvl12@gmail.com
// !2#superadmin

export const LoginHandler = async (
  email: string,
  password: string,
  navigate: NavigateFunction
) => {
  const response = await AmdinLoginHanlder(email, password);
  if (response?.status === 200) {
    setCookie(LoginType.refresh as string, response.headers.refresh_token, {
      path: "/",
      secure: true,
    });
    setCookie(LoginType.access as string, response.headers.access_token, {
      path: "/",
      secure: true,
    });

    localStorage.setItem("login-imgSrc", response.data.imgSrc);
    localStorage.setItem("login-nickname", response.data.name);
    alert(`환영합니다 ${localStorage.getItem("login-nickname")}님`);
    navigate("/memberlist");
  } else if (response?.status === 415) {
    alert(response.data.message);
  } else if (response?.status === 414) {
    alert("비밀번호가 틀렸습니다.");
  }
};

const AdminLogoutHandler = async () => {
  const accessToken = getCookie(LoginType.access as string);
  try {
    return await axios.delete(`${URL}logout`, {
      headers: {
        ACCESS_TOKEN: accessToken,
      },
    });
  } catch (error) {
    const { response } = error as unknown as AxiosError;
    return response;
  }
};

export const AdminLogout = async (navigate: NavigateFunction) => {
  const respons = await AdminLogoutHandler();
  if (respons?.status === 200) {
    navigate("/");
  }
};
