import { throttle } from 'lodash';
import React, { useEffect, useCallback } from 'react';

export function useElementHeight(ref) {
    const [height, setHeight] = React.useState(0);
    const updateHeight = React.useCallback(
        () => setHeight(ref.current?.clientHeight),
        [ref]
    )

    // const updateHeight = useCallback(
    //     () => {
    //         setHeight(ref.current?.clientHeight)
    //     },
    //     [ref],
    // )

    // const updateHeight = () => {
    //     setHeight(ref.current?.clientHeight)
    // }

    useEffect(() => {
        updateHeight();
        window.addEventListener('resize', updateHeight);
        return () => {
            window.removeEventListener('resize', updateHeight);
        }
    }, [updateHeight, ref])

    return height
}