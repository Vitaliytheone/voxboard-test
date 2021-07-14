import React, { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';

import { useElementHeight } from '../../hook';
import { TitleBox, TextareaBox, ContentBox } from './components';
import { Content, ContentFake } from '../ui';
import { titleMock, contentMock } from './config';

const AccordionBody = ({ title, children, open }) => {

    const [state, setState] = useState(open);
    const [addContentFlag, setAddFlag] = useState(false);
    const [textContent, changeText] = useState('');
    const [content, setContent] = useState([contentMock]);

    const ref = useRef(null);
    const height = useElementHeight(ref);

    useEffect(() => {
        const newArray = [];
        React.Children.map(children, child => (
            newArray.push(child)
        ))
        setContent(newArray);
    }, [])

    const variant = state ? 'open' : 'close';
    const isLength = content.length > 0;

    const openCollapse = (e) => {
        console.log('123')
        setState(!state);
        if (!state && addContentFlag) {
            setAddFlag(false);
        }
    }

    const openArea = async (e) => {
        e.stopPropagation();
        setAddFlag(true);
        setState(true);
    }

    const addContent = () => {
        setContent([textContent, ...content])
    }

    const removeContent = (elIndex) => () => {
        setContent(content.filter((item, index) => index !== elIndex))
    }

    // console.log(ref.current?.clientHeight);
    console.log('render');
    // console.log(state);
    // console.log(addContentFlag);

    return (
        <>
            <TitleBox
                toggles={{ openCollapse, openArea }}
                variant={variant}
                title={title}
            />
            {isLength || addContentFlag ?
                <Content
                    variant={variant}
                    maxHeight={state ? `${height}px` : 0}
                >
                    <ContentFake ref={ref}>
                        {addContentFlag &&
                            <TextareaBox
                                changeText={changeText}
                                addContent={addContent}
                                textContent={textContent}
                            />
                        }
                        <ContentBox
                            newRef={ref}
                            content={content}
                            removeContent={removeContent}
                        />
                    </ContentFake>
                </Content>
                : null
            }
        </>
    )
}

AccordionBody.propTypes = {
    title: PropTypes.string,
    open: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string,
        PropTypes.array
    ]),
}

AccordionBody.defaultProps = {
    title: titleMock,
    children: contentMock,
    open: false
}

export default AccordionBody