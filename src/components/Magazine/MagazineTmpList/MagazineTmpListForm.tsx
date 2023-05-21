import React, { useState, useEffect } from "react";

import MagazineTmpListTableForm from "./PageItems/MagazineTmpTable/MagazineTmpListTableForm";
import MagazineTmpHeader from "./PageItems/MagazineTmpHeader/MagazineTmpHeaderForm";
import PaginationForm from "components/Common/Pagination/PaginationForm";

import { useAppDispatch, useAppSelector } from "store/rootReducer";
import { Wrapper } from "./MagazineTmpListForm.styled";
import {
  getMagazineTmpList,
  MagazineTmpAction,
} from "redux/modules/MagazineTmpSlice";
import { deleteMagazineTmpHandler } from "utils/api/Magazine/MagazineTmpAPI";

function MagazineTmpListForm() {
  // 페이지당 몇개 그려줄지
  const postsPerPage = 20;
  // 첫 페이지
  const startPage = 1;
  const [isPage, setIsPage] = useState<number>(startPage);
  const offset = (isPage - 1) * postsPerPage;

  const { isLoading, currentPage, totalCount, totalPages } = useAppSelector(
    (state) => state.MagazineTmpSlice
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(MagazineTmpAction.setMagazineListCurrentPage({ isPage }));
    if (isPage === currentPage) {
      dispatch(
        getMagazineTmpList({
          page: isPage,
        })
      );
    }
    setIsPage(() => currentPage);
  }, [isPage, currentPage, dispatch]);

  // 매거진 삭제 함수
  const deleteMagazineOnClickHandler = (storageIds: number[]) => {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      deleteMagazineTmpHandler(storageIds)
        .then((response) => {
          if (response?.status === 200) {
            dispatch(
              getMagazineTmpList({
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
      <MagazineTmpHeader
        deleteMagazineTmpButtonOnClickHandler={deleteMagazineOnClickHandler}
      />
      {!isLoading ? (
        <>
          <MagazineTmpListTableForm
            offset={offset}
            postsPerPage={postsPerPage}
            totalContentsCount={totalCount}
            deleteButtonOnClickHandler={deleteMagazineOnClickHandler}
          />
        </>
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

export default MagazineTmpListForm;
