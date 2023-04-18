import React, { useState, useEffect } from "react";
import { Wrapper } from "./BannerListForm.styled";
import BannerTableForm from "./BannerTableForm";
import BannerTopForm from "./BannerTopForm";
import ClientAxios from "utils/api/AxiosAPI/ClientAxios";

const BannerListForm = () => {
    const [list, setList] = useState<any>();
    const [updated, setUpdated] = useState<boolean>(false);
    const [checked, setChecked] = useState<number[]>([]);
    const [loading, setLoading] = useState(true);
    const [keyword, setKeyword] = useState<string>();
    const [type, setType] = useState<string>();

    useEffect(() => {
        getData();
    }, [keyword, type, updated]);

    // useEffect(() => {
    //     console.log(checked);
    // }, checked);

    const getData = async () => {
        setLoading(true);
        const response = await ClientAxios.get(`banner`, {
            params: {
                type: type,
                keyword: keyword,
            },
        });
        console.log("getData", response.data.data.length);
        setList(response.data.data);
        setChecked([]);
        setLoading(false);
    };
    const deleteBanner = async (toDelete: number[]) => {
        console.log(toDelete);

        const response = await ClientAxios.delete(`banner`, {
            data: { requestDto: toDelete },
        });
        console.log(response);
        setUpdated((prev) => !prev);
    };
    const checkAll = (check: boolean) => {
        const newChecked: number[] = [];
        if (check) {
            list.map((item: any) => newChecked.push(item.seq));
        }
        setChecked(newChecked);
    };

    return (
        <Wrapper>
            <div
                style={{
                    width: "100%",
                    marginLeft: "auto",
                    marginRight: "auto",
                }}
            >
                <BannerTopForm
                    deleteBanner={deleteBanner}
                    checked={checked}
                    setKeyword={setKeyword}
                ></BannerTopForm>
                {loading ? (
                    <div>조회 중입니다.</div>
                ) : (
                    <>
                        <BannerTableForm
                            setType={setType}
                            deleteBanner={deleteBanner}
                            checkAll={checkAll}
                            setChecked={setChecked}
                            checked={checked}
                            list={list}
                        ></BannerTableForm>
                    </>
                )}
            </div>
        </Wrapper>
    );
};

export default BannerListForm;
