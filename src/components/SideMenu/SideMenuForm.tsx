import React, { useState, useRef } from 'react'
import { MainMenuItemsTypes, SubMenuItemTypes } from "../../types/SideMenuType";
import { Wrapper, ExpandArrow, MainMenu, MainMenuWrapper, SubMenu, SubMenuWrapper } from './SideMenuForm.styled';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const MainMenuTitle = [ "member", "market", "magazine", "community", "cooperation", "advertisement", "inquriy" ];

const MainMenuItems : MainMenuItemsTypes = {
  member        : [ { title : "회원 관리",      subMenu : "member", isClicked : true } ],
  market        : [ { title : "매장 관리",      subMenu : "market", isClicked : false } ],
  magazine      : [ { title : "매거진 관리",    subMenu : "magazine", isClicked : false } ],
  community     : [ { title : "커뮤니티 관리",  subMenu : "community", isClicked : false } ],
  cooperation   : [ { title : "제휴업체 관리",  subMenu : "cooperation", isClicked : false } ],
  advertisement : [ { title : "광고 관리",      subMenu : "advertisement", isClicked : false } ],
  inquriy       : [ { title : "문의 관리",      subMenu : "inquriy", isClicked : false } ],
};

const SubMenuItems: SubMenuItemTypes = {
  member: [
    {
      key: "member",
      name: "회원 정보 리스트",
      isClicked: true,
      path: "/member",
    },
    {
      key: "member",
      name: "딜러 등록 문의",
      isClicked: false,
      path: "회원정보 리스트",
    },
    {
      key: "member",
      name: "관리자 관리",
      isClicked: false,
      path: "회원정보 리스트",
    },
  ],
  market: [
    {
      key: "market",
      name: "매물 리스트",
      isClicked: true,
      path: "/salelist",
    },
    {
      key: "market",
      name: "판매차량 등록 문의",
      isClicked: false,
      path: "/saleinquriy",
    },
  ],
  magazine: [
    {
      key: "magazine",
      name: "매거진 리스트",
      isClicked: true,
      path: "회원정보 리스트",
    },
    {
      key: "magazine",
      name: "매거진 작성하기",
      isClicked: false,
      path: "회원정보 리스트",
    },
  ],
  community: [
    {
      key: "community",
      name: "게시글 리스트",
      isClicked: true,
      path: "회원정보 리스트",
    },
  ],
  cooperation: [
    {
      key: "cooperation",
      name: "제휴업체 리스트",
      isClicked: true,
      path: "회원정보 리스트",
    },
    {
      key: "cooperation",
      name: "제휴업체 등록 문의",
      isClicked: false,
      path: "회원정보 리스트",
    },
  ],
  advertisement: [
    {
      key: "advertisement",
      name: "광고 리스트",
      isClicked: true,
      path: "회원정보 리스트",
    },
    {
      key: "advertisement",
      name: "광고 문의",
      isClicked: false,
      path: "회원정보 리스트",
    },
    {
      key: "advertisement",
      name: "배너 리스트",
      isClicked: false,
      path: "회원정보 리스트",
    },
  ],
  inquriy: [
    {
      key: "inquriy",
      name: "딜러 등록 문의",
      isClicked: true,
      path: "회원정보 리스트",
    },
    {
      key: "inquriy",
      name: "판매차량 등록 문의",
      isClicked: false,
      path: "회원정보 리스트",
    },
    {
      key: "inquriy",
      name: "제휴업체 등록 문의",
      isClicked: false,
      path: "회원정보 리스트",
    },
    {
      key: "inquriy",
      name: "광고 문의",
      isClicked: false,
      path: "회원정보 리스트",
    },
    {
      key: "inquriy",
      name: "기타 문의",
      isClicked: false,
      path: "/etcinquiry",
    },
  ],
};
 
const SideMenuForm = () => {
  const [ isMainMenuClicked, setIsMainMenuClicked ] = useState< MainMenuItemsTypes >( MainMenuItems );
  const [ isSubMenuClicked, setIsSubMenuClicked ] = useState< SubMenuItemTypes >( SubMenuItems );
  const navigate = useNavigate();
  const pathRef = useRef<string>('');
  // onClickedMainMenuHandler
  // MainMenu가 눌리면 SubMenu를 활성화 해주는 함수
  // key : member, market... 을 받아 isClicked 속성을 비교
  const onClickedMainMenuHandler = ( key : string ) => {
    let dummyMainMenuItems : MainMenuItemsTypes = { ...MainMenuItems }; //MainMenuItems;

    for( const item in dummyMainMenuItems ){
      if( item === key ){
        dummyMainMenuItems[ item ][0].isClicked = !dummyMainMenuItems[ item ][0].isClicked;
        // if( pathRef.current !== '' ){
        //   // 상단 메뉴가 눌리더라도 기억하고 있는 위치로 가도록하기
        //   navigate( pathRef.current );
        // }
      }else{
        dummyMainMenuItems[ item ][0].isClicked = false;
      }
    }
    setIsMainMenuClicked( previousMainMenuState => ({ ...previousMainMenuState, ...dummyMainMenuItems } ) );
  };
  //  onClickedSubMenuHandler
  //  key : member, market ... 을 받아 name : 회원 정보 리스트... 의 isClicked 속성을 비교
  const onClickedSubMenuHandler = ( key : string, name : string ) => {
    let dummySubMenuItems : SubMenuItemTypes = { ...SubMenuItems };
    
    for( const item of dummySubMenuItems[ key ] ){
      if( item.name === name ){
        item.isClicked = true;
        pathRef.current = item.path;
        navigate( item.path );
      }else{
        item.isClicked = false;
      }
    }

    setIsSubMenuClicked( previousSubMenuState => ( { ...previousSubMenuState, ...dummySubMenuItems } ) );
  }

  return (
    <Wrapper>
      <ul>
        { MainMenuTitle.map( item => {
          return (
            <MainMenu key={item}>
              <MainMenuWrapper onClick={ () => onClickedMainMenuHandler( item ) } >
                <span>{ MainMenuItems[item][0].title}</span>
                <ExpandArrow isClicked={ MainMenuItems[item][0].isClicked } />
              </MainMenuWrapper>
              <SubMenuWrapper isClicked={ MainMenuItems[item][0].isClicked } >
              { SubMenuItems[item].map( item => {
                return( 
                <SubMenu key={ item.name } isClicked={ item.isClicked } onClick={ () => onClickedSubMenuHandler( item.key, item.name ) }>
                  <Link to={item.path}>{item.name}</Link>
                </SubMenu>
                )})}
              </SubMenuWrapper>
            </MainMenu>
          )})}
      </ul>
    </Wrapper>
  );
}

export default SideMenuForm