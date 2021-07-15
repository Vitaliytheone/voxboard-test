import React from 'react';

import { AreaWrap, Textarea, Button } from '../../../ui';

const TextareaBox = ({ changeText, addContent, textContent }) => {
    return (
        <AreaWrap>
            <Textarea
                autoFocus
                onChange={(e) => changeText(e.target.value)}
                value={textContent}
            />
            <Button
                variant='create'
                onClick={addContent}
                disabled={!textContent}
            >
                Add
            </Button>
        </AreaWrap>
    )
}

export default TextareaBox
