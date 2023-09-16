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
    Label,
    MonthOptionWrapper,
    MonthSelecter,
    PhotoDeleteButton,
    RadioBtnLabel,
    RadioBtnWrapper,
    SelecterWrapper,
    TableContent,
    TableHeader
} from "./AdvertisementModifyTableForm.styled";
import PageTitle from '../../../../Common/PageTitle/PageTitle';
import DropDownForm from "../../../../Common/DropDown/DropDownForm";
import {
    AdvertisementDefaultVersionSwitchDropDownMap,
    AdvertisementSetMonthSwitchDropDownMap,
    AdvertisementSetPageSwitchDropDownMap,
    AdvertisementSetYearSwitchDropDownMap
} from "../../../../../types/DropDownType";
import {Link} from "react-router-dom";
import {useNavigate, useParams} from "react-router";
import {advertisementDateCheck} from "../../../../../utils/api/Advertisement/AdvertisementAPI";
import {SelecterArrow,} from "../../../../Common/DropDown/DropDownForm.styeld";
import MonthDropDownForm from "./MonthDropDownForm";
import ClientAxios from "../../../../../utils/api/AxiosAPI/ClientAxios";


// type searchDataInterface = {filter: string;};
const AdvertisementModifyTableForm = () => {
    const {brdSeq} = useParams();

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

    const titleRef = useRef<HTMLSpanElement>(null);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [adSeq, setAdSeq] = useState<string>();
    const [inquirySeq, setInquirySeq] = useState<string>();
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
    const [price, setPrice] = useState<string>();
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [status, setStatus] = useState<boolean>(false);
    const [updated, setUpdated] = useState<boolean>(false);


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

    const update = async () => {
        const formData = new FormData();
        console.log(Number(adSeq))
        console.log(companyName)
        console.log(version)
        console.log(position)
        console.log(page)
        console.log(url)
        console.log(dateList)
        console.log(price)
        console.log(file)
        const requestDto = {

            id: Number(adSeq),
            adTitle: companyName,
            adType: version,
            adPosition: position,
            adPage: page,
            adLink: url,
            dates: dateList,
            pricePerMonth: price
        };

        formData.append("image", file);
        const blob = new Blob([JSON.stringify(requestDto)], {
            type: "application/json",
        });
        formData.append("requestDto", blob);
        console.log(formData);
        await ClientAxios.patch(`ad`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        setUpdated((prev) => !prev);
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


    useEffect(() => {
        getData();
    }, [updated]);
    const getData = async () => {
        setLoading(true);
        const response = await ClientAxios.get(`ad/${brdSeq}`);
        console.log("getData", response.data);
        setAdSeq(response.data.data.adSeq)
        setInquirySeq(response.data.data.inquirySeq)
        setCompanyName(response.data.data.adTitle);
        setVersion(response.data.data.adType);
        setPage(response.data.data.adPage);
        setUrl(response.data.data.url);
        setPosition(response.data.data.adPosition);
        setFileName(response.data.data.imgName);
        setFileUrl(response.data.data.imgUrl);
        addDateList(response.data.data.viewDate);
        setPrice(response.data.data.pricePerMonth)
        setStatus(response.data.data.status)
        setLoading(false);
    };

    const ListOnClickHandler = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {

        const currentPage = AdvertisementSetPageSwitchDropDownMap[event.currentTarget.textContent as string]
        console.log(AdvertisementDefaultVersionSwitchDropDownMap[version as string])
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
        console.log(currentPosition)
        setPosition(currentPosition);
    };
    const changeFile = (event: any) => {
        setFile(event.target.files[0]);
        setFileUrl(URL.createObjectURL(event.target.files[0]));
        setFileName(event.target.files[0].name);
    };

    const deleteImage = () =>  {
        setFile(undefined);
        setFileUrl(undefined);
        setFileName(undefined);
    };
    const deleteDate = (data: string) => {
        addDateList(dateList.filter(date => date !== data));
    };

    const priceOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(event.target.value)
        setTotalPrice(Number(event.target.value) * dateList.length)
    }


    return (
        <>
            <AdvertisementWrapper>
                <PageTitle title={"광고 수정"}/>
                <AdvertisementDetailTable>
                    <tbody>
                    <tr>
                        <TableHeader>광고 번호</TableHeader>
                        <TableContent>
                            <Label>{adSeq}</Label>
                        </TableContent>
                    </tr>
                    <tr>
                        <TableHeader>광고 문의 번호</TableHeader>
                        <TableContent>
                            <Input type={"number"} placeholder={inquirySeq} onChange={event => {
                                setInquirySeq(event.target.value)
                            }}></Input>
                        </TableContent>
                    </tr>
                    <tr>
                        <TableHeader>업체명</TableHeader>
                        <TableContent>
                            <Input type={"text"} placeholder={companyName} onChange={event => {
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
                            <Input type={"text"} placeholder={url} onChange={event => {
                                setUrl(event.target.value)
                            }}></Input>
                        </TableContent>
                    </tr>
                    <tr>
                        <TableHeader>이미지</TableHeader>
                        <TableContent>
                            <FileLabel htmlFor="file_banner" style={{width:"120px", cursor:"pointer"}}>
                                파일 추가 +
                            </FileLabel>
                            <input
                                type="file"
                                id="file_banner"
                                style={{display: "none"}}
                                onChange={changeFile}
                            />
                            <br/>
                            <div style={{display: "flex", marginTop: "10px", cursor:"pointer"}}>
                            <Link
                                to={fileUrl as string}
                                target="blank"
                            >
                                <FileNameWrapper>
                                    파일 {fileName}
                                </FileNameWrapper>
                            </Link>
                            <PhotoDeleteButton onClick={()=>deleteImage()}>
                                삭제 X
                            </PhotoDeleteButton>
                            </div>
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
                                                           monthResList={resDateList}/>
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
                                    )} <DeleteButton onClick={() => deleteDate(data)}>
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
                                   placeholder={price} onChange={event => {
                                priceOnChangeHandler(event)
                            }}></Input>
                        </TableContent>
                        <TableHeader>총액</TableHeader>
                        <TableContent>{(dateList.length * Number(price)).toLocaleString()} 원 <br></br> ( 1개월 단가 * 기간 값
                            출력 ) </TableContent>
                    </tr>
                    </tbody>
                </AdvertisementDetailTable>
                <CompleteButtonWrapper>
                    {/*<CompleteButton onClick={addSubmit}>수정하기</CompleteButton>*/}
                    <CompleteButton onClick={update}>수정하기</CompleteButton>

                </CompleteButtonWrapper>
            </AdvertisementWrapper>
        </>
    )
}


export default AdvertisementModifyTableForm;