export interface MainMenuItemsTypes {
  [key: string]: { title: string; subMenu: string; isClicked: boolean }[];
}

export interface SubMenuItemTypes {
  [key: string]: {
    key: string;
    name: string;
    isClicked: boolean;
    path: string;
  }[];
}
