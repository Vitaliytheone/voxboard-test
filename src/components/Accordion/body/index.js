import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Title, Content, RemoveButton, ContentInfo, Button } from '../ui';
import { titleMock, contentMock } from './config';

const AccordionBody = ({ title, children, open }) => {

    const [state, setState] = useState(open);
    const variant = state ? 'open' : 'close';

    return (
        <>
            <Title
                variant={variant}
                onClick={() => setState(!state)}
            >
                {title}
            </Title>
            <Content
                variant={variant}
            >
                <ContentInfo>
                    {children}
                    <RemoveButton>
                        <Button>Click</Button>
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