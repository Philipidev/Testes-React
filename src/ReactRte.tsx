import React, { useState } from 'react';
import RichTextEditor from "react-rte";
import { getTextAlignClassName } from './blockStyleFunctions';
import ButtonGroup from './ui/ButtonGroup';
import Dropdown from './ui/Dropdown';
import IconButton from './ui/IconButton';

export default function ReactRte() {

    const [value, setValue] = useState<any>();



    return (
        <RichTextEditor
            value={value}
            onChange={setValue}
            className="react-rte-demo"
            placeholder="Tell a story"
            toolbarClassName="demo-toolbar"
            editorClassName="demo-editor"
            readOnly={false}
            blockStyleFn={getTextAlignClassName}
            customControls={[
                // eslint-disable-next-line no-unused-vars
                (setValue, getValue, editorState) => {
                    let choices = new Map([
                        ['1', { label: '1' }],
                        ['2', { label: '2' }],
                        ['3', { label: '3' }],
                    ]);
                    return (
                        <ButtonGroup key={1}>
                            <Dropdown
                                choices={choices}
                                selectedKey={getValue('my-control-name')}
                                onChange={(value) => setValue('my-control-name', value)}
                            />
                        </ButtonGroup>
                    );
                },
                <ButtonGroup key={2}>
                    <IconButton
                        label="Remove Link"
                        iconName="remove-link"
                        focusOnClick={false}
                        onClick={() => console.log('You pressed a button')}
                    />
                </ButtonGroup>,
            ]}
        />
    )
}