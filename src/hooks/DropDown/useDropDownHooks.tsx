import { useEffect, useRef, useState } from "react";
import { DropDownItemMap } from "../../types/DropDownType";

interface useDetectPropsType{
    initState : boolean;
    title : string;
}

export const useDetectOutSideHandler = ( { initState, title } : useDetectPropsType ) => {
    const [ isOpen , setIsOpen ] = useState< boolean >( initState );
    const [ isTitle, setIsTitle ] = useState< string >( DropDownItemMap[ title ][0].name );
    const outSideRef = useRef<HTMLDivElement>(null);

    // dropdown 목록 열기
    const openDropDownItemHandler = ( isOpen : boolean ) => {
        setIsOpen( !isOpen );
    };

    // dropdown item 클릭시 title 바꾸고 목록 닫기
    const changeDropDownItemTitleHanlder = ( text : string ) => {
        setIsTitle( text );
        setIsOpen( false );  
    };

    // 외부 영역 클릭시, 목록 닫기
    useEffect(()=>{
        const onCheckOutSideHandler = ( event : CustomEvent<MouseEvent> ) => {
          if( isOpen && outSideRef.current && ! outSideRef.current.contains( event.target as Node ) ){
            setIsOpen( false );
          }
        };
        document.addEventListener('mousedown', onCheckOutSideHandler as EventListener );
        return () => {
          document.removeEventListener( "mousedown", onCheckOutSideHandler as EventListener );
        }
      },[ outSideRef.current ]);
    return{
        isOpen : isOpen,
        isTitle : isTitle,
        ref : outSideRef,
        openDropDownFn : openDropDownItemHandler,
        changeDropDownTitleFn : changeDropDownItemTitleHanlder
    }
};