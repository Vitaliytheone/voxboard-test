import React from 'react';
import { IconContext } from 'react-icons';
import { BiPlus } from 'react-icons/bi';

import { TitleWrap, Title, Button } from '../../../ui';

const TitleBox = ({ toggles: { openCollapse, openArea }, variant, title }) => {
    return (
        <TitleWrap
            onClick={openCollapse}
        >
            <Title
                variant={variant}
            >
                {title}
            </Title>
            <Button
                variant='add'
                onClick={openArea}
            >
                <IconContext.Provider value={{ size: '14px' }}>
                    <BiPlus />
                </IconContext.Provider>
            </Button>
        </TitleWrap>
    )
}

export default TitleBox
