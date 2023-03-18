import React, { useState, useEffect } from "react";
import { Button } from "components/Common/Button/ButtonForm.styled";
import { ModalBackground, ModalContainer, Input, InputRow, InputTable } from "./AdminModifyModal.styled";

import { useAppDispatch, useAppSelector } from "store/rootReducer";
import { AdminAction, setAdminInfo } from "redux/modules/AdminSlice";
import { AdminListType } from "types/AdminList";

type AdminModifyModalProps = {
    admSeq: number;
    admName: string;
    admPhone: string;
    admEmail: string;
    admNickname: string;
};

function AdminModifyModalForm({ admSeq, admName, admPhone, admEmail, admNickname }: AdminModifyModalProps) {
    const [isShowModal, setIsShowModal] = useState<boolean>(false);
    const [adminName, setAdminName] = useState<string>("");
    const [adminPhoneNumber, setAdminPhoneNumber] = useState<string>("");
    const [adminNickName, setAdminNickName] = useState<string>("");
    const [adminEmail, setAdminEmail] = useState<string>("");

    const dispatch = useAppDispatch();
    const { list } = useAppSelector((state) => state.AdminSlice);

    useEffect(() => {
        setAdminName(admName);
        setAdminPhoneNumber(admPhone);
        setAdminEmail(admEmail);
        setAdminNickName(admNickname);
    }, []);

    const nameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAdminName(event.currentTarget.value);
    };

    const phoneNumberChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAdminPhoneNumber(event.currentTarget.value);
    };

    const nickNameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAdminNickName(event.currentTarget.value);
    };

    const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAdminEmail(event.currentTarget.value);
    };

    const openModalHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setIsShowModal(true);
    };

    const closeModalHandler = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        setIsShowModal(false);
    };

    const modifyAdmin = () => {
        dispatch(setAdminInfo({ admSeq: admSeq, name: adminName, phone: adminPhoneNumber, email: adminEmail, nickname: adminNickName }));
        let newList: AdminListType[] = [];
        list.forEach((el: AdminListType) => {
            if (el.admSeq === admSeq) {
                newList.push({
                    admSeq: admSeq,
                    admProfileImageUrl: el.admProfileImageUrl,
                    admNickname: admNickname,
                    admEmail: admEmail,
                    admName: admName,
                    admPhone: admPhone,
                    regMagazineCount: el.regMagazineCount,
                    isBlock: el.isBlock,
                });
            } else {
                newList.push(el);
            }
        });
        dispatch(AdminAction.setAdminList({ list: newList }));
        setIsShowModal(false);
    };

    return (
        <>
            <Button onClick={openModalHandler}>수정하기</Button>
            {isShowModal && (
                <>
                    <ModalBackground onClick={closeModalHandler}></ModalBackground>
                    <ModalContainer>
                        <div className="Title">수정하기</div>
                        <InputTable>
                            <InputRow>
                                <div>이름</div>
                                <Input placeholder="이름을 입력해주세요." value={adminName} onChange={nameChangeHandler} />
                            </InputRow>
                            <InputRow>
                                <div>전화번호</div>
                                <Input placeholder="전화번호를 입력해주세요." value={adminPhoneNumber} onChange={phoneNumberChangeHandler} />
                            </InputRow>
                            <InputRow>
                                <div>닉네임</div>
                                <Input placeholder="닉네임을 입력해주세요." value={adminNickName} onChange={nickNameChangeHandler} />
                            </InputRow>
                            <InputRow>
                                <div>이메일</div>
                                <Input placeholder="이메일을 입력해주세요." value={adminEmail} onChange={emailChangeHandler} />
                            </InputRow>
                        </InputTable>
                        <div className="Button">
                            <Button style={{ width: "120px", height: "44px" }} onClick={closeModalHandler}>
                                취소
                            </Button>
                            <Button style={{ width: "120px", height: "44px" }} className="brown" onClick={modifyAdmin}>
                                수정 완료
                            </Button>
                        </div>
                    </ModalContainer>
                </>
            )}
        </>
    );
}

export default AdminModifyModalForm;
