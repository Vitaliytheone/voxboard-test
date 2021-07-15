import { throttle } from 'lodash';
import React, { useEffect, useCallback } from 'react';

export function useElementHeight(ref) {
    const [height, setHeight] = React.useState(0);

    const updateHeight = React.useCallback(
        () => setHeight(ref),
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

    console.log(ref)
    useEffect(() => {
        updateHeight();
        window.addEventListener('resize', updateHeight);
        return () => {
            window.removeEventListener('resize', updateHeight);
        }
    }, [updateHeight])

    return height
}