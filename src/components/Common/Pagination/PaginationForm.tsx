import React from "react";
import { PaginationPropsType } from "../../../types/PaginationType";

import IconFront from "../../../assets/front_arrow.svg";
import IconPrevious from "../../../assets/previous_arrow.svg";
import IconLast from "../../../assets/last_arrow.svg";
import IconNext from "../../../assets/next_arrow.svg";
import {
  ChangePageButton,
  ChangePageButtonImage,
  PageNumberButton,
  PaginationWrapper,
} from "./PaginationForm.styled";

import usePaginationHooks from "../../../hooks/Pagination/usePaginationHooks";

const PaginationForm = ({
  paginationCount,
  postsPerPage,
  isPage,
  totalContentsCount,
  setIsPage,
}: PaginationPropsType) => {
  // const totalPages = Math.ceil( totalContentsCount / postsPerPage );
  const {
    Page,
    offset,
    frontButtonOnClickHanlder,
    previousButtonOnClickHanlder,
    lastButtonOnClickHanlder,
    nextButtonOnClickHanlder,
    pageButtonOnClickHandler,
  } = usePaginationHooks({
    paginationCount,
    postsPerPage,
    isPage,
    totalContentsCount,
    setIsPage,
  });

  return (
    <PaginationWrapper>
      <ChangePageButton onClick={() => frontButtonOnClickHanlder()}>
        <ChangePageButtonImage src={IconFront} />
      </ChangePageButton>
      <ChangePageButton
        onClick={() => previousButtonOnClickHanlder()}
        disabled={Page === 1}
      >
        <ChangePageButtonImage src={IconPrevious} />
      </ChangePageButton>
      {Array(paginationCount)
        .fill(0)
        .slice(offset, offset + paginationCount)
        .map((_, i) => {
          return (
            <PageNumberButton
              key={i}
              aria-current={Page === i + 1 + offset ? "page" : undefined}
              onClick={() => pageButtonOnClickHandler(i + 1 + offset)}
            >
              {i + 1 + offset}
            </PageNumberButton>
          );
        })}
      <ChangePageButton
        onClick={() => nextButtonOnClickHanlder()}
        disabled={Page === paginationCount}
      >
        <ChangePageButtonImage src={IconNext} />
      </ChangePageButton>
      <ChangePageButton onClick={() => lastButtonOnClickHanlder()}>
        <ChangePageButtonImage src={IconLast} />
      </ChangePageButton>
    </PaginationWrapper>
  );
};

export default PaginationForm;
