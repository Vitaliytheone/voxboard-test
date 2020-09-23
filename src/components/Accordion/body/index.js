import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { BiTrash, BiPlus } from 'react-icons/bi';

import { TitleWrap, Title, Content, RemoveButton, ContentInfo, Button, Textarea, AreaWrap } from '../ui';
import { titleMock, contentMock } from './config';

const AccordionBody = ({ title, children, open }) => {

    const [state, setState] = useState(open);
    const [addContent, setAdd] = useState(false);
    const variant = state ? 'open' : 'close';

    const openCollapse = () => {
        setState(!state);
        if (!state && addContent) {
            setAdd(false);
        }
    }

    const openArea = (e) => {
        e.stopPropagation();
        setState(true);
        setAdd(true);
    }

    return (
        <>
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
            <Content
                variant={variant}
            >
                {addContent &&
                    <AreaWrap>
                        <Textarea />
                        <Button variant='create'>Add</Button>
                    </AreaWrap>
                }
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