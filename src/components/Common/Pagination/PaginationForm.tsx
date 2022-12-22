import React, { useEffect } from 'react'
import { PaginationPropsType } from "../../../types/PaginationType";

import IconFront from "../../../assets/front_arrow.svg";
import IconPrevious from "../../../assets/previous_arrow.svg";
import IconLast from "../../../assets/last_arrow.svg";
import IconNext from "../../../assets/next_arrow.svg";
import { PaginationWrapper, ChangePageButton, ChangePageButtonImage, PageNumberButton } from "./PaginationForm.styled";

import usePaginationHooks from "../../../hooks/Pagination/usePaginationHooks";

const PaginationForm = ( { paginationCount, postsPerPage, isPage, totalContentsCount, setIsPage } : PaginationPropsType ) => {
  const totalPages = Math.ceil( totalContentsCount / postsPerPage );
  const { Page, offset, frontButtonOnClickHanlder, previousButtonOnClickHanlder, lastButtonOnClickHanlder, nextButtonOnClickHanlder } = usePaginationHooks({ paginationCount, postsPerPage, isPage, totalContentsCount, setIsPage } );
  useEffect(()=>{
    console.log( offset, Page );
  },[Page])
  return (
    <PaginationWrapper>
      <ChangePageButton onClick={()=> frontButtonOnClickHanlder()} >
        <ChangePageButtonImage src={IconFront}/>
      </ChangePageButton>
      <ChangePageButton onClick={() => previousButtonOnClickHanlder() } disabled={ Page === 1 }>
        <ChangePageButtonImage src={IconPrevious} />
      </ChangePageButton>
      { Array( totalPages ).fill( 0 ).slice( offset, offset + paginationCount ).map( ( _, i ) => {
        return (
          <PageNumberButton key={i} aria-current={ Page === ( i + 1 + offset ) ? "page" : undefined } >{ i + 1 + offset }</PageNumberButton>
        )
      })}      
      <ChangePageButton onClick={ () => nextButtonOnClickHanlder() } disabled={ Page === totalPages }>
        <ChangePageButtonImage src={IconNext} />
      </ChangePageButton>
      <ChangePageButton onClick={ () => lastButtonOnClickHanlder() }>
        <ChangePageButtonImage src={IconLast} />
      </ChangePageButton>
    </PaginationWrapper>
  )
}

export default PaginationForm;