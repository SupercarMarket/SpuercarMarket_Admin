import React, { useRef } from "react";
import {
  MarketTableBody,
  MarketTableBodyRowSpan,
  MarketCheckBoxWrapper,
  MarketInputCheckBox,
  MarketLabelCheckBox,
  MarketTableBodyClamp,
  MarketTableBodyNoSpan,
  MarketTableBodyButton,
  DisableMarketTableBodyButton,
  DisableMarketInputCheckBox,
} from "./ForSaleTableBodyForm.styled";

import {
  ForSaleListPropsType,
  CategoryMap,
} from "../../../../../../types/ForSaleList";
import { MarketAction } from "../../../../../../redux/modules/MarketSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../store/rootReducer";
import { useNavigate } from "react-router";
import { setAdvertisementComplete } from "../../../../../../redux/modules/AdvertisementSlice";
import ClientAxios from "../../../../../../utils/api/AxiosAPI/ClientAxios";
import { AdminLogout } from "../../../../../../utils/api/Login/LoginAPI";
import { AxiosError } from "axios/index";

const ForSaleTableBodyForm = ({
  offset,
  postsPerPage,
  totalContentsCount,
}: ForSaleListPropsType) => {
  const inputCheckTypeRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { list, checkList } = useAppSelector((state) => state.MarketSlice);

  const inputCheckOnClickHandler = () => {
    console.log(inputCheckTypeRef.current?.checked);
  };

  // 항목 체크 박스 셋업
  const userCheckBoxClickHandler = (brdSeq: number, isChecked: boolean) => {
    dispatch(MarketAction.setMarketListEachChecked({ brdSeq, isChecked }));
  };

  const inputCheckOnChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    userCheckBoxClickHandler(parseInt(event.target.id), event.target.checked);
  };

  // 숨기기 버튼 동작
  const productHideHandler = async (brdSeq: number, pdtApper: boolean) => {
    if (pdtApper) {
      await ClientAxios.post(`/product/hide`, [brdSeq], {
        // headers: {
        //   "Content-Type": "application/json",
        // },
      })
        .then((response) => {
          if (response.status === 200) {
            alert("[숨기기 완료]");
            // eslint-disable-next-line no-restricted-globals
            location.reload();
          }
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      const requestDto = {
        seq: brdSeq,
      };
      await ClientAxios.patch(`/product/un-hide`, requestDto, {
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.status === 200) {
            alert("[숨기기 취소 완료]");
            // eslint-disable-next-line no-restricted-globals
            location.reload();
          }
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  // 숨기기 버튼 동작
  const productDeleteHandler = async (brdSeq: number) => {
    await ClientAxios.delete(`/product/${brdSeq}`)
      .then((response) => {
        if (response.status === 200) {
          alert("[삭제 완료]");
          // eslint-disable-next-line no-restricted-globals
          location.reload();
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  // 매물 디테일로 넘어가기
  const MarketDetailOnClickHandler = (brdSeq: number) => {
    navigate(`/salelist/${brdSeq}`);
  };

  return (
    <MarketTableBody key={`uuid`}>
      {list.slice(offset, offset + postsPerPage).map((item, index) => {
        return (
          <React.Fragment key={item.brdSeq}>
            <tr onClick={() => MarketDetailOnClickHandler(item.brdSeq)}>
              <MarketTableBodyRowSpan
                rowSpan={2}
                onClick={(event) => {
                  event.stopPropagation();
                }}
              >
                {item.pdtAppear ? (
                  <MarketCheckBoxWrapper>
                    <MarketInputCheckBox
                      id={item.brdSeq.toString()}
                      ref={inputCheckTypeRef}
                      onClick={inputCheckOnClickHandler}
                      onChange={(event) => {
                        inputCheckOnChangeHandler(event);
                      }}
                      checked={!!checkList.includes(item.brdSeq)}
                    />
                    <MarketLabelCheckBox htmlFor={item.brdSeq.toString()} />
                  </MarketCheckBoxWrapper>
                ) : (
                  <MarketCheckBoxWrapper>
                    <DisableMarketInputCheckBox />
                    <MarketLabelCheckBox />
                  </MarketCheckBoxWrapper>
                )}
              </MarketTableBodyRowSpan>
              <MarketTableBodyRowSpan
                rowSpan={2}
                style={{ cursor: "pointer" }}
                onClick={() => MarketDetailOnClickHandler(item.brdSeq)}
              >
                {String(item.brdSeq.toString()).padStart(7, "0")}
              </MarketTableBodyRowSpan>
              <MarketTableBodyRowSpan rowSpan={2} style={{ cursor: "pointer" }}>
                {/* {CategoryMap[item.category]} */}
                {item.category}
              </MarketTableBodyRowSpan>
              <MarketTableBodyRowSpan
                rowSpan={2}
                style={{
                  textAlign: "left",
                  padding: "8.5px 16px",
                  cursor: "pointer",
                }}
              >
                <MarketTableBodyClamp>{item.title}</MarketTableBodyClamp>
              </MarketTableBodyRowSpan>
              <MarketTableBodyRowSpan rowSpan={2} style={{ cursor: "pointer" }}>
                {item.pdtStatus}
              </MarketTableBodyRowSpan>
              <MarketTableBodyRowSpan rowSpan={2} style={{ cursor: "pointer" }}>
                {item.createdDate.split("T")[0]}
              </MarketTableBodyRowSpan>
              <MarketTableBodyNoSpan style={{ cursor: "pointer" }}>
                {String(item.dlrSeq.toString()).padStart(7, "0")}
              </MarketTableBodyNoSpan>
              <MarketTableBodyNoSpan style={{ cursor: "pointer" }}>
                {item.userId}
              </MarketTableBodyNoSpan>
              <MarketTableBodyRowSpan
                rowSpan={2}
                onClick={(event) => {
                  event.stopPropagation();
                }}
              >
                <MarketTableBodyButton
                  onClick={() =>
                    productHideHandler(item.brdSeq, item.pdtAppear)
                  }
                >
                  {item.pdtAppear ? "숨기기" : "숨기기 취소"}
                </MarketTableBodyButton>
              </MarketTableBodyRowSpan>
              <MarketTableBodyRowSpan
                rowSpan={2}
                onClick={(event) => {
                  event.stopPropagation();
                }}
              >
                {item.pdtDelete ? (
                  <DisableMarketTableBodyButton style={{ cursor: "auto" }}>
                    삭제된 매물
                  </DisableMarketTableBodyButton>
                ) : (
                  <MarketTableBodyButton
                    onClick={() => productDeleteHandler(item.brdSeq)}
                  >
                    삭제하기
                  </MarketTableBodyButton>
                )}
              </MarketTableBodyRowSpan>
            </tr>
            <tr>
              <MarketTableBodyNoSpan style={{ cursor: "pointer" }}>
                {item.name}
              </MarketTableBodyNoSpan>
              <MarketTableBodyNoSpan style={{ cursor: "pointer" }}>
                {item.userNickName}
              </MarketTableBodyNoSpan>
            </tr>
          </React.Fragment>
        );
      })}
    </MarketTableBody>
  );
};

export default ForSaleTableBodyForm;
