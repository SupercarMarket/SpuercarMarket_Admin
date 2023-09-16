import React, { useEffect, useState } from "react";

import "@toast-ui/editor/dist/toastui-editor.css";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/i18n/ko-kr";
import { HookCallback } from "@toast-ui/editor/types/editor";
import { uploadImage, makeUploadImageURL } from "utils/api/S3Upload/AdminS3ClientAPI";

interface TuiEditorProps {
    contents: string;
    editorRef: React.MutableRefObject<any>;
    uploadedImage: string[];
    setUploadedImage: Function;
}

function TuiEditorForm({ contents = "", editorRef, uploadedImage, setUploadedImage }: TuiEditorProps) {
    const toolbarItems = [["heading", "bold", "italic", "strike"], ["hr"], ["ul", "ol", "task"], ["table", "link"], ["image"], ["code"], ["scrollSync"]];

    const onUploadImage = async (blob: Blob, callback: HookCallback) => {
        uploadImage(blob)
            .then((url) => {
              if(url){
                const filename = url.split("/")[-1];
                setUploadedImage([...uploadedImage, filename]);
                callback(url);
              }
                return false;
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            {editorRef && (
                <Editor
                    ref={editorRef}
                    placeholder="내용을 입력하세요"
                    initialValue={contents || " "} // 글 수정 시 사용
                    initialEditType="wysiwyg" // wysiwyg & markdown
                    previewStyle={window.innerWidth > 1000 ? "vertical" : "tab"} // tab, vertical
                    hideModeSwitch={true}
                    height="1424px"
                    theme={""} // '' & 'dark'
                    usageStatistics={false}
                    toolbarItems={toolbarItems}
                    useCommandShortcut={true}
                    plugins={[colorSyntax]}
                    hooks={{ addImageBlobHook: onUploadImage }}
                />
            )}
        </>
    );
}

export default TuiEditorForm;
