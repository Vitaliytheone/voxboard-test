import React from 'react';
import { IconContext } from 'react-icons';
import { BiTrash } from 'react-icons/bi';

import { ContentInfo, RemoveButton, Button } from '../../../ui';

const ContentBox = ({ content, removeContent, }) => {

    return (
        <>
            {content.map((item, index) => {
                return (
                    <ContentInfo key={index}>
                        {item}
                        <RemoveButton>
                            <Button
                                variant='remove'
                                onClick={removeContent(index)}
                            >
                                <IconContext.Provider value={{ size: '20px' }}>
                                    <BiTrash />
                                </IconContext.Provider>
                            </Button>
                        </RemoveButton>
                    </ContentInfo>
                )
            })}
        </>
    )
}

export default ContentBox
