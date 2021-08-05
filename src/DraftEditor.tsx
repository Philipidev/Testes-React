import React from "react";
import { DraftEditorCommand, Editor, EditorState, RichUtils } from "draft-js";
import "draft-js/dist/Draft.css";

export default function DraftEditor() {
    const [editorState, setEditorState] = React.useState(() =>
        EditorState.createEmpty()
    );
    console.log(editorState);

    const editor = React.useRef<any>(null);
    function focusEditor() {
        editor.current.focus();
    }

    function _onBoldClick() {
        RichUtils.toggleInlineStyle(editorState, "BOLD");
    }

    function handleKeyCommand(command: DraftEditorCommand, editorState: EditorState, eventTimeStamp: number) {
        const newState = RichUtils.handleKeyCommand(editorState, command);
       
        if (newState) {
            setEditorState(newState);
            return 'handled';
        }

        return 'not-handled';
    }

    return (
        <>
            <button onClick={_onBoldClick}>Bold</button>
            <div
                style={{ border: "1px solid black", minHeight: "6em", cursor: "text" }}
                onClick={focusEditor}
            >
                <Editor
                    ref={editor}
                    editorState={editorState}
                    handleKeyCommand={handleKeyCommand}
                    onChange={setEditorState}
                    placeholder="Write something!"
                />
            </div>
        </>
    );
}

