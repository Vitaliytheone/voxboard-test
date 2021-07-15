import React, { useEffect, useCallback } from 'react';

export function useElementHeight(refHeight) {
    const [height, setHeight] = React.useState(0);

    const updateHeight = useCallback(
        () => setHeight(refHeight),
        [refHeight]
    )

    useEffect(() => {
        updateHeight();
        window.addEventListener('resize', updateHeight);
        return () => {
            window.removeEventListener('resize', updateHeight);
        }
    }, [updateHeight])

    return height
}