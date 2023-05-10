import React, { useState, useEffect } from "react";

import ClientAxios from "utils/api/AxiosAPI/ClientAxios";
import {
    Wrapper,
    Table,
    TableHeader,
    TableContent,
    TableWrapper,
    CompleteButton,
    CompleteButtonWrapper,
} from "./BannerDetailForm.styled";

import PageTitle from "components/Common/PageTitle/PageTitle";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

const BannerDetailForm = () => {
    const { id } = useParams();

    const [data, setData] = useState<any>();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        setLoading(true);
        const response = await ClientAxios.get(`banner/${id}`);
        setData(response.data.data);
        setLoading(false);
    };

    return (
        <>
            <Wrapper>
                <TableWrapper>
                    <PageTitle title={"배너 정보"} />
                    {loading ? (
                        <>로딩중입니다..</>
                    ) : (
                        <Table>
                            <tbody>
                                <tr>
                                    <TableHeader>배너명</TableHeader>
                                    <TableContent>{data?.title}</TableContent>
                                </tr>
                                <tr>
                                    <TableHeader>버전</TableHeader>
                                    <TableContent>{data?.type}</TableContent>
                                </tr>
                                <tr>
                                    <TableHeader>URL</TableHeader>
                                    <TableContent>{data?.url}</TableContent>
                                </tr>
                                <tr>
                                    <TableHeader>이미지</TableHeader>
                                    <TableContent>
                                        <Link to={data?.image_url}>
                                            {data?.image_name}
                                        </Link>
                                    </TableContent>
                                </tr>
                                <tr>
                                    <TableHeader>순번</TableHeader>
                                    <TableContent>{data?.order}</TableContent>
                                </tr>
                            </tbody>
                        </Table>
                    )}
                </TableWrapper>
                <CompleteButtonWrapper>
                    <Link to={`/banner/update/${id}`}>
                        <CompleteButton>수정하기</CompleteButton>
                    </Link>
                </CompleteButtonWrapper>
            </Wrapper>
        </>
    );
};

export default BannerDetailForm;
