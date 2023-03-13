import React, { useState } from "react";
import { getAdminList, setNewAdmin } from "redux/modules/AdminSlice";
import { useAppDispatch } from "store/rootReducer";

import { Button } from "components/Common/Button/ButtonForm.styled";
import { ModalBackground, ModalContainer, Input, InputTable, InputRow } from "./NewAdminModal.styled";

function NewAdminModalForm() {
    const [isShowModal, setIsShowModal] = useState<boolean>(false);
    const [adminName, setAdminName] = useState("");
    const [adminPhoneNumber, setAdminPhoneNumber] = useState("");
    const [adminEmail, setAdminEmail] = useState("");

    const dispatch = useAppDispatch();

    const nameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAdminName(event.currentTarget.value);
    };

    const phoneNumberChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAdminPhoneNumber(event.currentTarget.value);
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

    const registerAdmin = () => {
        dispatch(setNewAdmin({ name: adminName, phone: adminPhoneNumber, email: adminEmail }));
        dispatch(getAdminList({ filter: "", keyword: "", page: 1 }));
        setIsShowModal(false);
    };

    return (
        <>
            <Button onClick={openModalHandler}>신규 관리자 등록</Button>
            {isShowModal && (
                <>
                    <ModalBackground onClick={closeModalHandler}></ModalBackground>
                    <ModalContainer>
                        <div className="Title">신규 관리자 등록</div>
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
                                <div>이메일</div>
                                <Input placeholder="이메일을 입력해주세요." value={adminEmail} onChange={emailChangeHandler} />
                            </InputRow>
                        </InputTable>
                        <div className="Button">
                            <Button style={{ width: "120px", height: "44px" }} onClick={closeModalHandler}>
                                취소
                            </Button>
                            <Button style={{ width: "120px", height: "44px" }} className="brown" onClick={registerAdmin}>
                                등록
                            </Button>
                        </div>
                    </ModalContainer>
                </>
            )}
        </>
    );
}

export default NewAdminModalForm;
