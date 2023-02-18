import React from 'react';

export interface SearchBarProps {
    SearchBarInputRef : React.RefObject<HTMLInputElement>,
    SearchBarOnClick : React.MouseEventHandler<HTMLImageElement>,
    SearchBarInputOnKeyDown : React.KeyboardEventHandler<HTMLInputElement>
};