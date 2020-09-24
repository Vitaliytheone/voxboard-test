import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { useResize } from '../../hook';
import { TitleBox, TextareaBox, ContentBox } from './components';
import { Content } from '../ui';
import { titleMock, contentMock } from './config';

const AccordionBody = ({ title, children, open }) => {

    const [state, setState] = useState(open);
    // const [height, setHeight] = useState(0);
    const [addContentFlag, setAddFlag] = useState(false);
    const [textContent, changeText] = useState('');
    const [content, setContent] = useState([contentMock]);

    const ref = useRef(null);

    const { height } = useResize(ref, open)

    // useEffect(() => {
    //     setHeight(ref.current.clientHeight);
    // }, [ref.current?.clientHeight, open]);


    useEffect(() => {
        const newArray = [];
        React.Children.map(children, child => (
            newArray.push(child)
        ))
        setContent(newArray);
    }, [])

    const variant = state ? 'open' : 'close';
    const isLength = content.length > 0;

    const openCollapse = () => {
        setState(!state);
        if (!state && addContentFlag) {
            setAddFlag(false);
        }
    }

    const openArea = (e) => {
        e.stopPropagation();
        setState(true);
        setAddFlag(true);
    }

    const addContent = () => {
        setContent([textContent, ...content])
    }

    const removeContent = (elIndex) => () => {
        setContent(content.filter((item, index) => index !== elIndex))
    }

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
                    ref={ref}
                >
                    {addContentFlag &&
                        <TextareaBox
                            changeText={changeText}
                            addContent={addContent}
                        />
                    }
                    <ContentBox
                        newRef={ref}
                        content={content}
                        removeContent={removeContent}
                    />
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