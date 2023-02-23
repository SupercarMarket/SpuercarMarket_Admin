import React from 'react'
import {
  DownLaodFileWrapper,
  DownLaodFileTitle,
  DownLaodFileContentWrapper,
  DownLaodFileInputButtonWrapper,
  DownLaodFileInput,
  DownLaodButton,
} from "./DownLoadFileForm.styled";

import { useAppSelector } from '../../../../../store/rootReducer';

const DownLaodFileForm = () => {
  const { detailItem } = useAppSelector( state => state.ForSaleListSlice );
  
  const downloadFileFromURL = ( fileName : string, url : string ) => {
    fetch(url, { method: "GET" })
      .then((res) => {
        // console.log( res );
        return res.blob();
      })
      .then((blob) => {
        // console.log( blob );
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
          URL.revokeObjectURL(url);
        }, 60000);
        a.remove();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <DownLaodFileWrapper>
        <DownLaodFileTitle>첨부 파일</DownLaodFileTitle>
        <DownLaodFileContentWrapper>
          { detailItem?.attSrc.map( item => {
            return (
              <DownLaodFileInputButtonWrapper key={ item.originName }>
                <DownLaodFileInput>{item.originName}</DownLaodFileInput>
                <DownLaodButton style={{ width:"105px"}} onClick={ () => downloadFileFromURL( item.originName, item.attAttachmentUrl )}>다운로드</DownLaodButton>
              </DownLaodFileInputButtonWrapper>    
            )
          })}
        </DownLaodFileContentWrapper>
      </DownLaodFileWrapper>
    </>
  );
}

export default DownLaodFileForm;