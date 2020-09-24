import React from 'react';

import { AreaWrap, Textarea, Button } from '../../../ui';

const TextareaBox = ({ changeText, addContent }) => {
    return (
        <AreaWrap>
            <Textarea
                onChange={(e) => changeText(e.target.value)}
            />
            <Button
                variant='create'
                onClick={addContent}
            >
                Add
            </Button>
        </AreaWrap>
    )
}

export default TextareaBox
