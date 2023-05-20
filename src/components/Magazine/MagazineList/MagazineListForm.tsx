import React, { useState, useEffect } from "react";

import MagazineListTableForm from "./PageItems/MagazineTable/MagazineListTableForm";
import MagazineSearchForm from "./PageItems/MagazineSearchForm/MagazineSearchForm";
import MagazineHeader from "./PageItems/MagazineHeader/MagazineHeaderForm";
import PaginationForm from "components/Common/Pagination/PaginationForm";

import { useAppDispatch, useAppSelector } from "store/rootReducer";
import { MagazineListType } from "types/MagazineList";
import { Wrapper } from "./MagazineListForm.styled";
import {
  getMagazineList,
  MagazineListAction,
} from "redux/modules/MagazineListSlice";
import {
  deleteMagazineHandler,
  undiscloseMagazineHandler,
} from "utils/api/Magazine/MagazineListAPI";

function MagazineListForm() {
  // 페이지당 몇개 그려줄지
  const postsPerPage = 20;
  // 첫 페이지
  const startPage = 1;
  const [isPage, setIsPage] = useState<number>(startPage);
  const offset = (isPage - 1) * postsPerPage;

  const {
    isLoading,
    keyword,
    title,
    allDate,
    startDate,
    endDate,
    currentPage,
    totalCount,
    list,
    totalPages,
  } = useAppSelector((state) => state.MagazineListSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(MagazineListAction.setMagazineListCurrentPage({ isPage }));
    if (isPage === currentPage) {
      dispatch(
        getMagazineList({
          keyword: keyword as string,
          title: title as string,
          allDate: allDate as boolean,
          startDate: startDate as Date,
          endDate: endDate as Date,
          page: isPage,
        })
      );
    }
    setIsPage(() => currentPage);
  }, [isPage, currentPage, dispatch]);

  // 체크 리스트를 받아 해당 매거진을 숨기는 함수
  const hideCheckedMagazineOnClickHandler = (hideMagazineList: number[]) => {
    undiscloseMagazineHandler(hideMagazineList, true)
      .then((response) => {
        if (response?.status === 200) {
          let newList: MagazineListType[] = [];
          list.forEach((magazine) => {
            let thisMagazine = { ...magazine };
            if (hideMagazineList.includes(thisMagazine.id)) {
              thisMagazine.hidden = true;
            }
            newList.push(thisMagazine);
          });
          dispatch(MagazineListAction.setMagazineList({ list: newList }));
          dispatch(
            MagazineListAction.setMagazineListAllChecked({ allChecked: false })
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 숨기기 취소 함수
  const unhideMagazineOnClickHandler = (id: number) => {
    undiscloseMagazineHandler([id], false)
      .then((response) => {
        if (response?.status === 200) {
          let newList: MagazineListType[] = [];
          list.forEach((magazine) => {
            if (magazine.id === id) {
              newList.push({ ...magazine, hidden: false });
            } else {
              newList.push(magazine);
            }
          });
          dispatch(MagazineListAction.setMagazineList({ list: newList }));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 매거진 삭제 함수
  const deleteMagazineOnClickHandler = (id: number) => {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      deleteMagazineHandler(id.toString())
        .then((response) => {
          if (response?.status === 200) {
            dispatch(
              getMagazineList({
                keyword: keyword as string,
                title: title as string,
                allDate: allDate as boolean,
                startDate: startDate as Date,
                endDate: endDate as Date,
                page: isPage,
              })
            );
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <Wrapper>
      <MagazineSearchForm />
      <MagazineHeader
        hideCheckedMagazineOnClickHandler={hideCheckedMagazineOnClickHandler}
      />
      {!isLoading ? (
        <MagazineListTableForm
          offset={offset}
          postsPerPage={postsPerPage}
          totalContentsCount={totalCount}
          hideButtonOnClickHandler={hideCheckedMagazineOnClickHandler}
          unhideButtonOnClickHandler={unhideMagazineOnClickHandler}
          deleteButtonOnClickHandler={deleteMagazineOnClickHandler}
        />
      ) : (
        <div>조회중입니다.</div>
      )}
      <PaginationForm
        paginationCount={totalPages}
        postsPerPage={postsPerPage}
        totalContentsCount={totalCount}
        isPage={isPage}
        setIsPage={setIsPage}
      />
    </Wrapper>
  );
}

export default MagazineListForm;
