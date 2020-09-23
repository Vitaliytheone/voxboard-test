import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { BiTrash, BiPlus } from 'react-icons/bi';

import { TitleWrap, Title, Content, RemoveButton, ContentInfo, Button } from '../ui';
import { titleMock, contentMock } from './config';

const AccordionBody = ({ title, children, open }) => {

    const [state, setState] = useState(open);
    const variant = state ? 'open' : 'close';

    return (
        <>
            <TitleWrap
                onClick={() => setState(!state)}
            >
                <Title
                    variant={variant}
                >
                    {title}
                </Title>
                <Button
                    variant='add'
                >
                    <IconContext.Provider value={{ size: '14px' }}>
                        <BiPlus />
                    </IconContext.Provider>
                </Button>
            </TitleWrap>
            <Content
                variant={variant}
            >
                <ContentInfo>
                    {children}
                    <RemoveButton>
                        <Button
                            variant='remove'
                        >
                            <IconContext.Provider value={{ size: '20px' }}>
                                <BiTrash />
                            </IconContext.Provider>
                        </Button>
                    </RemoveButton>
                </ContentInfo>
            </Content>
        </>
    )
}

AccordionBody.propTypes = {

}

AccordionBody.defaultProps = {
    title: titleMock,
    children: contentMock,
    open: false
}

export default AccordionBody