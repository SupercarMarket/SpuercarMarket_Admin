import React from "react";
import { Viewer } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";

function TuiPreviewForm({ contents }: { contents: string }) {
    return <Viewer initialValue={contents || ""} />;
}

export default TuiPreviewForm;
