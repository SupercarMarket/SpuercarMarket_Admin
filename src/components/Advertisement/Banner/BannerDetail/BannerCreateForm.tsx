import React, { useState, useEffect, useRef } from "react";
import {
    Wrapper,
    Table,
    TableHeader,
    TableContent,
    TableWrapper,
    CompleteButton,
    CompleteButtonWrapper,
    Input,
    RadioBtnWrapper,
    RadioBtnLabel,
    SelecterWrapper,
    Selecter,
    SelecterArrow,
    OptionWrapper,
    OptionItem,
    FileLabel,
    FileNameWrapper,
    DeleteButton
} from "./BannerUpdateForm.styled";

import ClientAxios from "utils/api/AxiosAPI/ClientAxios";
import PageTitle from "components/Common/PageTitle/PageTitle";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { useDetectOutSideHandler } from "hooks/DropDown/useDropDownHooks";
import { DropDownItemMap } from "types/DropDownType";
import { useNavigate } from "react-router";
const BannerCreateForm = () => {
    const navigate = useNavigate();
    const titleRef = useRef<HTMLSpanElement>(null);
    const { isOpen, isTitle, ref, openDropDownFn, changeDropDownTitleFn } =
        useDetectOutSideHandler({
            initState: false,
            title: "banner_order_list",
        });
    const [title, setTitle] = useState<string>();
    const [type, setType] = useState<string>();
    const [url, setUrl] = useState<string>();
    const [order, setOrder] = useState<string>();
    const [fileName, setFileName] = useState();
    const [fileUrl, setFileUrl] = useState<string>();
    const [file, setFile] = useState<any>();

    const LiOnClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        setOrder(event.currentTarget.textContent as string);
    };
    const create = async () => {
        const formData = new FormData();
        const requestDto = {
            order: order,
            title: title,
            type: type,
            url: url,
        };

        formData.append("image", file);
        const blob = new Blob([JSON.stringify(requestDto)], {
            type: "application/json",
        });
        formData.append("requestDto", blob);
        console.log(formData);
        await ClientAxios.post(`banner`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        navigate("/bannerlist");
    };
    const changeFile = (event: any) => {
        console.log(event.target.files);
        setFile(event.target.files[0]);
        setFileUrl(URL.createObjectURL(event.target.files[0]));
        setFileName(event.target.files[0].name);
    };
    const deleteImage = () => {
        setFile(undefined);
        setFileUrl(undefined);
        setFileName(undefined);
    };
    return (
        <>
            <Wrapper>
                <TableWrapper>
                    <PageTitle title={"배너 등록"} />

                    <Table>
                        <tbody>
                            <tr>
                                <TableHeader>배너명</TableHeader>
                                <TableContent>
                                    <Input
                                        value={title}
                                        onChange={(event) =>
                                            setTitle(event.target.value)
                                        }
                                    ></Input>
                                </TableContent>
                            </tr>
                            <tr>
                                <TableHeader>버전</TableHeader>
                                <TableContent>
                                    <RadioBtnWrapper>
                                        <RadioBtnLabel>
                                            <input
                                                type="radio"
                                                value={type}
                                                checked={type === "PC"}
                                                name="PC"
                                                onChange={(event) =>
                                                    setType(event.target.name)
                                                }
                                            />
                                            <span>PC</span>
                                        </RadioBtnLabel>

                                        <RadioBtnLabel>
                                            <input
                                                type="radio"
                                                value={type}
                                                checked={type === "모바일"}
                                                name="모바일"
                                                onChange={(event) =>
                                                    setType(event.target.name)
                                                }
                                            />
                                            <span>모바일</span>
                                        </RadioBtnLabel>
                                    </RadioBtnWrapper>
                                </TableContent>
                            </tr>
                            <tr>
                                <TableHeader>URL</TableHeader>
                                <TableContent>
                                    <Input
                                        value={url}
                                        onChange={(event) =>
                                            setUrl(event.target.value)
                                        }
                                    ></Input>
                                </TableContent>
                            </tr>
                            <tr>
                                <TableHeader>이미지</TableHeader>
                                <TableContent>
                                    <FileLabel htmlFor="file_banner">
                                        파일 추가 +
                                    </FileLabel>
                                    <input
                                        type="file"
                                        id="file_banner"
                                        style={{ display: "none" }}
                                        onChange={changeFile}
                                    />
                                    <br />
                                    <Link to={fileUrl as string} target="blank"
                                            style={{ display: "inline-block" }}>
                                        <FileNameWrapper>
                                            파일 {fileName}
                                        </FileNameWrapper>
                                    </Link>
                                        <DeleteButton onClick={deleteImage}>
                                            삭제 X{" "}
                                        </DeleteButton>
                                    <div
                                        style={{
                                            padding: "5px",
                                            color: "grey",
                                        }}
                                    >
                                        PC : 3840px * 1200px
                                    </div>
                                    <div
                                        style={{
                                            padding: "5px",
                                            color: "grey",
                                        }}
                                    >
                                        모바일 : 750px * 320px
                                    </div>
                                </TableContent>
                            </tr>
                            <tr>
                                <TableHeader>순번</TableHeader>
                                <TableContent>
                                    <SelecterWrapper ref={ref}>
                                        <Selecter
                                            onClick={() =>
                                                openDropDownFn(isOpen)
                                            }
                                        >
                                            <span ref={titleRef}>
                                                {isTitle}
                                            </span>
                                        </Selecter>
                                        <SelecterArrow />
                                        <OptionWrapper isClicked={isOpen}>
                                            {DropDownItemMap[
                                                "banner_order_list"
                                            ].map((item) => {
                                                return (
                                                    <OptionItem
                                                        key={item.name}
                                                        onClick={(event) => {
                                                            changeDropDownTitleFn(
                                                                item.name
                                                            );
                                                            LiOnClick(event);
                                                        }}
                                                    >
                                                        {item.name}
                                                    </OptionItem>
                                                );
                                            })}
                                        </OptionWrapper>
                                    </SelecterWrapper>
                                </TableContent>
                            </tr>
                        </tbody>
                    </Table>
                </TableWrapper>
                <CompleteButtonWrapper>
                    <CompleteButton onClick={create}>등록하기</CompleteButton>
                </CompleteButtonWrapper>
            </Wrapper>
        </>
    );
};

export default BannerCreateForm;
