import React, {useEffect, useRef, useState} from 'react'
import {useDetectOutSideHandler} from "hooks/DropDown/useDropDownHooks";
import {
    AdvertisementDetailTable,
    AdvertisementWrapper,
    Circle,
    CompleteButton,
    CompleteButtonWrapper,
    DeleteButton,
    FileLabel,
    FileNameWrapper,
    Input,
    MonthOptionWrapper,
    MonthSelecter,
    RadioBtnLabel,
    RadioBtnWrapper,
    SelecterWrapper,
    TableContent,
    TableHeader
} from "./AdvertisementEditTableForm.styled";
import PageTitle from '../../../../Common/PageTitle/PageTitle';
import DropDownForm from "../../../../Common/DropDown/DropDownForm";
import {
    AdvertisementSetMonthSwitchDropDownMap,
    AdvertisementSetPageSwitchDropDownMap,
    AdvertisementSetYearSwitchDropDownMap
} from "../../../../../types/DropDownType";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
import {advertisementDateCheck} from "../../../../../utils/api/Advertisement/AdvertisementAPI";
import {useAppDispatch} from "../../../../../store/rootReducer";
import {SelecterArrow,} from "../../../../Common/DropDown/DropDownForm.styeld";
import MonthDropDownForm from "./MonthDropDownForm";
import ClientAxios from "../../../../../utils/api/AxiosAPI/ClientAxios";


// type searchDataInterface = {filter: string;};
const AdvertisementEditTableForm = () => {
    const titleRef = useRef<HTMLSpanElement>(null);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [inquiryNumber, setInquiryNumber] = useState<string>();
    const [companyName, setCompanyName] = useState<string>();
    const [version, setVersion] = useState<string>();
    const [position, setPosition] = useState<string>();
    const [page, setPage] = useState<string>();
    const [url, setUrl] = useState<string>();
    const [file, setFile] = useState<any>();
    const [fileName, setFileName] = useState();
    const [fileUrl, setFileUrl] = useState<string>();
    const [month, setMonth] = useState<string>()
    const [year, setYear] = useState<string>("1")
    const [dateList, addDateList] = useState<string[]>([])
    const [resDateList, setResDateList] = useState<string[]>([])
    const [price, setPrice] = useState<number>(0);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [possibleMonth, setPossibleMonth] = useState<string[]>([]);

    const DropDownTitleRefPage = useRef<HTMLSpanElement>(null);
    const DropDownTitleRefYear = useRef<HTMLSpanElement>(null);
    const DropDownTitleRefMonth = useRef<HTMLSpanElement>(null);

    const versionOption = [
        {value: "D", name: "PC"},
        {value: "M", name: "모바일"},
    ];
    const positionOption = [
        {value: "M", name: "중앙"},
        {value: "L", name: "좌측"},
        {value: "R", name: "우측"},
    ];

    const create = async () => {
        const formData = new FormData();
        const requestDto = {
            inquiryId: Number(inquiryNumber),
            adTitle: companyName,
            adType: version,
            adPosition: position,
            adPage: page,
            adLink: url,
            dates: dateList,
            pricePerMonth:price
        };
        if (inquiryNumber)

        formData.append("image", file);
        const blob = new Blob([JSON.stringify(requestDto)], {
            type: "application/json",
        });
        formData.append("requestDto", blob);
        console.log(formData);
        await ClientAxios.post(`ad`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }).catch(reason => {
            alert(reason)
        });
        navigate("/advertisementlist");
    };

    const {isOpen, isTitle, ref, openDropDownFn} =
        useDetectOutSideHandler({
            initState: false,
            title: "month_list",
        });


    useEffect(() => {
        if (page && DropDownTitleRefPage.current) {
            DropDownTitleRefPage.current.textContent = AdvertisementSetPageSwitchDropDownMap[page as string];
        }
        if (year && DropDownTitleRefYear.current) {
            DropDownTitleRefYear.current.textContent = AdvertisementSetYearSwitchDropDownMap[year as string];
        }
        if (month && DropDownTitleRefMonth.current) {
            DropDownTitleRefMonth.current.textContent = AdvertisementSetMonthSwitchDropDownMap[month as string];
        }
    }, []);

    const ListOnClickHandler = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {

        const currentPage = AdvertisementSetPageSwitchDropDownMap[event.currentTarget.textContent as string]

        setPage(currentPage);
        if (currentPage == "SM001") {
            setPosition(undefined)
        }
    };

    const setYearListOnClickHandler = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        let currentYear = event.currentTarget.textContent as string;
        setYear(currentYear);
        advertisementDateCheck(version, page, position, Number(currentYear))
            .then(response => {
                if (response?.status === 200) {
                    setPossibleMonth(response.data.data.impossibleDate)
                    setResDateList(response.data.data.impossibleDate)

                }
            })
    };
    const setMonthListOnClickHandler = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        let currentMonth = event.currentTarget.textContent as string;
        const addMonthToZero = (month: string) => {
            if (Number(month) < 10) {
                return `0${month}`
            }
            return month
        }
        const isMonth = !!dateList.filter(data => {
            return data === `${year}-${addMonthToZero(AdvertisementSetMonthSwitchDropDownMap[currentMonth as string])}`
        }).length
        setMonth(currentMonth);
        if (!isMonth) {
            addDateList([...dateList, `${year}-${addMonthToZero(AdvertisementSetMonthSwitchDropDownMap[currentMonth as string])}`])
        }
    };

    const versionRadioBtnClickHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        let version = event.currentTarget.value as string;
        setVersion(version);
    };
    const positionRadioBtnClickHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        let currentPosition = event.currentTarget.value as string;
        setPosition(currentPosition);
    };
    const changeFile = (event: any) => {
        setFile(event.target.files[0]);
        setFileUrl(URL.createObjectURL(event.target.files[0]));
        setFileName(event.target.files[0].name);
    };

    const deleteImage = (data: string) => {
        console.log(data)
        setFile(undefined);
        setFileUrl(undefined);
        setFileName(undefined);
        addDateList(dateList.filter(date => date !== data));
    };

    function temp() {
        console.log(companyName)
        console.log(version)
        console.log(position)
        console.log(page)
        console.log(url)
        console.log(fileName)
        console.log(fileUrl)
        console.log(month)
        console.log(year)
        console.log(dateList)
        console.log(price)
        console.log(totalPrice)
        console.log(resDateList)
    }

    const priceOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(Number(event.target.value))
        setTotalPrice(Number(event.target.value) * dateList.length)
    }


    return (
        <>
            <AdvertisementWrapper>
                <PageTitle title={"광고 등록"}/>
                <AdvertisementDetailTable>
                    <tbody>
                    <tr>
                        <TableHeader>광고 문의 번호</TableHeader>
                        <TableContent>
                            <Input type={"number"} placeholder={"광고 문의 번호를 입력하세요"} onChange={event => {
                                setInquiryNumber(event.target.value)
                            }}></Input>
                        </TableContent>
                    </tr>
                    <tr>
                        <TableHeader>업체명</TableHeader>
                        <TableContent>
                            <Input type={"text"} placeholder={"업체명을 입력하세요"} onChange={event => {
                                setCompanyName(event.target.value)
                            }}></Input>
                        </TableContent>
                    </tr>
                    <tr>
                        <TableHeader>버전</TableHeader>
                        <TableContent>
                            <RadioBtnWrapper>
                                {versionOption.map((option) => (
                                    <RadioBtnLabel key={option.value}>
                                        <input type="radio" value={option.value} checked={option.value === version}
                                               onChange={versionRadioBtnClickHandler}/>
                                        <span>{option.name}</span>
                                    </RadioBtnLabel>
                                ))}
                            </RadioBtnWrapper>
                        </TableContent>
                    </tr>
                    <tr>
                        <TableHeader>위치</TableHeader>
                        <TableContent>
                            <RadioBtnWrapper>
                                {positionOption.map((option) => (
                                    <RadioBtnLabel key={option.value}>
                                        <input type="radio" value={option.value} checked={option.value === position}
                                               disabled={option.value === "M" && page === "SM001"}
                                               onChange={positionRadioBtnClickHandler}/>
                                        <span>{option.name}</span>
                                    </RadioBtnLabel>
                                ))}
                            </RadioBtnWrapper>
                        </TableContent>

                    </tr>
                    <tr>
                        <TableHeader>페이지</TableHeader>
                        <TableContent>
                            <DropDownForm category={"advertisement_page_list"}
                                          LiOnClick={(event) => ListOnClickHandler(event)}
                                          titleRef={DropDownTitleRefPage}></DropDownForm>
                        </TableContent>
                    </tr>
                    <tr>
                        <TableHeader>URL</TableHeader>
                        <TableContent>
                            <Input type={"text"} placeholder={"URL을 입력하세요"} onChange={event => {
                                setUrl(event.target.value)
                            }}></Input>
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
                                style={{display: "none"}}
                                onChange={changeFile}
                            />
                            <br/>
                            <Link
                                to={fileUrl as string}
                                target="blank"
                            >
                                <FileNameWrapper>
                                    파일 {fileName}
                                </FileNameWrapper>
                            </Link>

                        </TableContent>
                    </tr>
                    <tr>
                        <TableHeader>기간</TableHeader>
                        <TableContent style={{border: "none",}}>
                            <div style={{display: "flex", flexDirection: "inherit", marginTop: "10px"}}>
                                <DropDownForm category={"year_list"}
                                              LiOnClick={(event) => setYearListOnClickHandler(event)}
                                              titleRef={DropDownTitleRefYear}></DropDownForm>
                                <SelecterWrapper ref={ref}>
                                    <MonthSelecter
                                        onClick={() =>
                                            openDropDownFn(isOpen)
                                        }
                                    >
                                                <span ref={titleRef}>
                                                    {isTitle}
                                                </span>
                                    </MonthSelecter>
                                    <SelecterArrow/>
                                    <MonthOptionWrapper isClicked={isOpen}>
                                        <MonthDropDownForm category={"month_list"}
                                                           LiOnClick={setMonthListOnClickHandler}
                                                           monthResList={resDateList} />
                                    </MonthOptionWrapper>

                                </SelecterWrapper>
                            </div>

                            <div style={{
                                display: "flex",
                                flexDirection: "inherit",
                                marginTop: "10px",
                                marginBottom: "16px"
                            }}>
                                {dateList.map((data, idx) => (
                                    <Circle key={`${data}_${idx}`}>{data.split(`-`).map((data, idx) => {
                                            if (idx === 0) {
                                                return `${data.substring(2, 4)}년 `
                                            }
                                            return `${data}월`
                                        }
                                    )} <DeleteButton onClick={() => deleteImage(data)}>
                                        X
                                    </DeleteButton>
                                    </Circle>
                                ))}
                            </div>
                        </TableContent>
                    </tr>
                    <tr>
                        <TableHeader>1개월 단가</TableHeader>

                        <TableContent>
                            <Input style={{width: "300px"}} className={"monthPayment"} type={"number"}
                                   placeholder={"단가를 입력하세요"} onChange={event => {
                                priceOnChangeHandler(event)
                            }}></Input>
                        </TableContent>
                        <TableHeader>총액</TableHeader>
                        <TableContent>{(dateList.length * Number(price)).toLocaleString()} 원 <br></br> ( 1개월 단가 * 기간 값 출력 ) </TableContent>
                    </tr>
                    </tbody>
                </AdvertisementDetailTable>
                <CompleteButtonWrapper>
                    {/*<CompleteButton onClick={addSubmit}>수정하기</CompleteButton>*/}
                    <CompleteButton onClick={create}>등록하기</CompleteButton>

                </CompleteButtonWrapper>
            </AdvertisementWrapper>
        </>
    )
}

export default AdvertisementEditTableForm;