import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  ModalButton,
  ModalButtonWrapper,
  ModalDisplayBox,
  ModalInput,
  ModalOuter,
  ModalProfileImg,
  ModalSubTitle,
  ModalTitle,
  ModalWrapper,
  WarningSpan,
} from "./ModalForm.styled";
import ClientAxios from "../../../utils/api/AxiosAPI/ClientAxios";
import { AdminLogout } from "../../../utils/api/Login/LoginAPI";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import DefaultIcon from "../../../assets/default_user_icon.svg";
import modalForm from "../../Cooperation/Modal/ModalForm";

interface ModalPropsType {
  type: string;
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalForm = ({ type, isOpenModal, setIsOpenModal }: ModalPropsType) => {
  const pwInputRef = useRef<HTMLInputElement>(null);
  const fileInput = useRef<HTMLInputElement>(null);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isConfirmError, setIsConfirmError] = useState(false);
  const [currentPassword, setCurrentPassword] = useState<string>();
  const [newPassword, setNewPassword] = useState<string>();
  const [newPasswordRe, setNewPasswordRe] = useState<string>();
  const [seq, setSeq] = useState<number>();
  const [file, setFile] = useState<any>();
  const [fileName, setFileName] = useState();
  const [fileUrl, setFileUrl] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const [nickName, setNickName] = useState<string>();
  const [imageChange, setImageChange] = useState<boolean>();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<any>(
    `${localStorage.getItem("login-imgSrc")}`
  );

  const [confirmErrorMsg, setConrifmErrorMsg] =
    useState("비밀번호가 일치하지 않습니다.");

  useEffect(() => {
    ClientAxios.get(`/admin/info`)
      .then((response) => {
        if (response.status === 200) {
          setSeq(response.data.seq);
          setEmail(response.data.email);
          setPhone(response.data.phone);
          setNickName(response.data.nickName);
        }
      })
      .catch((error) => {
        alert(error);
      });
    document.body.style.cssText = `
        position: fixed; 
        top: -${window.scrollY}px;
        overflow-y: none;
        width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);
  const handlerCurrentPWConfirm = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCurrentPassword(event.target.value);
    setIsConfirmError(false);
  };

  const handlerPwConfirm = (event: React.ChangeEvent<HTMLInputElement>) => {
    const reg =
      /^(?=.*[a-zA-Z0-9])(?=.*[\!\@\#\$\%\^\&\*\(\)\-\_\=\+\\\|\[\]\{\}\;\:\'\"\,\.\/\<\>\?\~\`])[a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\-\_\=\+\\\|\[\]\{\}\;\:\'\"\,\.\/\<\>\?\~\`]{7,}$/;
    if (!reg.test(event.target.value)) {
      setIsError(true);
      setErrorMsg(
        "영문/숫자/특수문자 중 2가지 이상, 8자 이상을 만족해야 합니다."
      );
    } else {
      setNewPassword(event.target.value);
      setIsError(false);
    }
  };

  const handlerPWReConfirm = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value !== pwInputRef.current?.value) {
      setIsConfirmError(true);
    } else {
      setNewPasswordRe(event.target.value);
      setIsConfirmError(false);
    }
  };

  const changePasswordSubmit = async () => {
    const requestDto = {
      password: currentPassword,
      newPassword: newPassword,
      newPasswordCheck: newPasswordRe,
    };
    await ClientAxios.patch(`/admin/pw`, requestDto, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          alert("[비밀번호 수정 완료] 재 로그인 부탁드립니다.");
          AdminLogout(navigate);
        }
      })
      .catch((error) => {
        const { response } = error as unknown as AxiosError;
        if (response?.status === 414) {
          alert(
            "[수정 오류] 현재 비밀번호가 다릅니다. 다시 확인 부탁드립니다."
          );
        } else {
          alert(error);
        }
      });
  };

  //프로필 사진 변경
  const changeProfileImage = (event: any) => {
    setFile(event.target.files[0]);
    console.log(event.target.files[0]);
    setFileUrl(URL.createObjectURL(event.target.files[0]));
    setFileName(event.target.files[0].name);
    setProfile(URL.createObjectURL(event.target.files[0]));
    setImageChange(true);
  };

  const changeMyInfoHandler = async () => {
    console.log(file);
    const formData = new FormData();
    const requestDto = {
      phone: phone,
      email: email,
      nickName: nickName,
    };
    formData.append("img", file);
    const blob = new Blob([JSON.stringify(requestDto)], {
      type: "application/json",
    });
    formData.append("infoChangeDto", blob);
    await ClientAxios.patch(`/admin/my-info`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("login-imgSrc", response.data.imgSrc);
          localStorage.setItem("login-nickname", response.data.nickName);
          alert("[정보 수정 완료]");
          setIsOpenModal(false);
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  return createPortal(
    <>
      {isOpenModal && type === "pw" ? (
        <ModalOuter onClick={() => setIsOpenModal(false)}>
          <ModalWrapper onClick={(event) => event.stopPropagation()}>
            <ModalTitle>비밀번호 수정</ModalTitle>
            <ModalDisplayBox>
              <ModalSubTitle style={{ paddingRight: "45px" }}>
                현재 비밀번호
              </ModalSubTitle>
              <ModalDisplayBox
                style={{ flexDirection: "column", rowGap: "8px" }}
              >
                <ModalInput
                  ref={pwInputRef}
                  type="password"
                  placeholder="현재 비밀번호를 입력해주세요."
                  onChange={(event) => handlerCurrentPWConfirm(event)}
                />
              </ModalDisplayBox>
            </ModalDisplayBox>
            <ModalDisplayBox>
              <ModalSubTitle style={{ paddingRight: "58px" }}>
                새 비밀번호
              </ModalSubTitle>
              <ModalDisplayBox
                style={{ flexDirection: "column", rowGap: "8px" }}
              >
                <ModalInput
                  ref={pwInputRef}
                  type="password"
                  placeholder="비밀번호를 입력해주세요."
                  onChange={(event) => handlerPwConfirm(event)}
                />
                <WarningSpan isError={isError}>
                  {isError
                    ? `${errorMsg}`
                    : `영문/숫자/특수문자 중 2가지 이상, 8자 이상`}
                </WarningSpan>
              </ModalDisplayBox>
            </ModalDisplayBox>
            <ModalDisplayBox>
              <ModalSubTitle style={{ paddingRight: "44px" }}>
                비밀번호 확인
              </ModalSubTitle>
              <ModalDisplayBox
                style={{ flexDirection: "column", rowGap: "8px" }}
              >
                <ModalInput
                  type="password"
                  placeholder="비밀번호를 한번 더 입력해주세요."
                  onChange={(event) => handlerPWReConfirm(event)}
                />
                <WarningSpan isError={isConfirmError}>
                  {isConfirmError && `${confirmErrorMsg}`}
                </WarningSpan>
              </ModalDisplayBox>
            </ModalDisplayBox>
            <ModalDisplayBox style={{ justifyContent: "center" }}>
              <ModalButtonWrapper>
                <ModalButton
                  title="cancel"
                  onClick={() => setIsOpenModal(false)}
                >
                  취소
                </ModalButton>
                <ModalButton title={""} onClick={() => changePasswordSubmit()}>
                  수정 완료
                </ModalButton>
              </ModalButtonWrapper>
            </ModalDisplayBox>
          </ModalWrapper>
        </ModalOuter>
      ) : (
        <ModalOuter onClick={() => setIsOpenModal(false)}>
          <ModalWrapper
            style={{ height: "533px" }}
            onClick={(event) => event.stopPropagation()}
          >
            <ModalTitle>내 정보 수정</ModalTitle>
            <ModalDisplayBox>
              <ModalSubTitle>닉네임</ModalSubTitle>
              <ModalInput
                placeholder="닉네임을 입력하세요."
                defaultValue={nickName}
                onChange={(event) => {
                  setNickName(event.target.value);
                }}
              />
            </ModalDisplayBox>
            <ModalDisplayBox>
              <ModalSubTitle style={{ paddingRight: "58px" }}>
                프로필 사진
              </ModalSubTitle>
              <ModalDisplayBox style={{ alignItems: "end" }}>
                <ModalProfileImg
                  src={profile !== "null" ? (profile as string) : DefaultIcon}
                />
                <React.Fragment>
                  <ModalButton
                    title="cancel"
                    // typeof={"file"}
                    onClick={() => fileInput.current?.click()}
                  >
                    수정하기
                  </ModalButton>
                  <input
                    ref={fileInput}
                    type="file"
                    style={{ display: "none" }}
                    accept="image/jpg, image/png, image/jpeg"
                    onChange={changeProfileImage}
                  />
                  {/*</AppStyle>*/}
                </React.Fragment>
              </ModalDisplayBox>
            </ModalDisplayBox>
            <ModalDisplayBox>
              <ModalSubTitle>이메일</ModalSubTitle>
              <ModalInput defaultValue={email} disabled />
            </ModalDisplayBox>
            <ModalDisplayBox>
              <ModalSubTitle style={{ paddingRight: "77px" }}>
                전화번호
              </ModalSubTitle>
              <ModalInput
                defaultValue={phone}
                placeholder={`전화번호를 입력하세요.`}
                onChange={(event) => {
                  setPhone(event.target.value);
                }}
              />
            </ModalDisplayBox>
            <ModalDisplayBox style={{ justifyContent: "center" }}>
              <ModalButtonWrapper>
                <ModalButton
                  title="cancel"
                  onClick={() => setIsOpenModal(false)}
                >
                  취소
                </ModalButton>
                <ModalButton title="" onClick={() => changeMyInfoHandler()}>
                  수정 완료
                </ModalButton>
              </ModalButtonWrapper>
            </ModalDisplayBox>
          </ModalWrapper>
        </ModalOuter>
      )}
    </>,
    document.getElementById("modal") as HTMLElement
  );
};

export default ModalForm;
