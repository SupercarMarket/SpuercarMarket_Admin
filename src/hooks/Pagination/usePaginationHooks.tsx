import { useState } from 'react'
import { PaginationPropsType } from "../../types/PaginationType";

const usePaginationHooks = ({
  paginationCount,
  postsPerPage,
  isPage,
  totalContentsCount,
  setIsPage,
}: PaginationPropsType) => {
  const [isPageCount, setIsPageCount] = useState<number>(1);
  const totalPages = Math.ceil(totalContentsCount / postsPerPage);
  let offset = (isPageCount - 1) * paginationCount;

  // 가장 앞으로 가기 버튼 눌렸을 때
  const frontButtonOnClickHanlder = () => {
    // pageCount를 1로 바꿈
    // page 번호도 1로 바꿈
    setIsPageCount(1);
    setIsPage(1);
  };

  // 이전으로 가기 버튼 눌렸을 때
  const previousButtonOnClickHanlder = () => {
    setIsPage( pre => pre - 1 );
    // 페이지가 11, 21, 31 일 경우
    // 총 페이지 수를 1개 줄인다.
    if (isPage % 10 === 1) {
      setIsPageCount((prePage) => prePage - 1);
    }
  };

  // 가장 뒤로 가기 버튼 눌렀을 때
  const lastButtonOnClickHanlder = () => {
    // 가장 마지막 페이지 개수
    // 가장 마지막 페이지 번호
    setIsPageCount(Math.ceil(totalPages / paginationCount));
    setIsPage(totalPages);
  };

  // 다음으로 가기 버튼 눌렀을 때
  const nextButtonOnClickHanlder = () => {
    setIsPage( pre => pre + 1 );
    // 10, 20, 30일 때 페이지를 1개 증가
    if (isPage % 10 === 0) {
      setIsPageCount((pre) => pre + 1);
    }
  };
  return {
    Page : isPage,
    offset : offset,
    frontButtonOnClickHanlder : frontButtonOnClickHanlder,
    previousButtonOnClickHanlder : previousButtonOnClickHanlder,
    lastButtonOnClickHanlder : lastButtonOnClickHanlder,
    nextButtonOnClickHanlder : nextButtonOnClickHanlder
  };
};

export default usePaginationHooks;