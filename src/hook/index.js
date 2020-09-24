import { useState, useEffect } from 'react';

export const useResize = (myRef) => {
    const [height, setHeight] = useState(0)

    const handleResize = () => {
        setHeight(myRef.current?.offsetHeight)
    }

    useEffect(() => {
        myRef.current && myRef.current.addEventListener('resize', handleResize)

        return () => {
            myRef.current.removeEventListener('resize', handleResize)
        }
    }, [myRef])

    console.log(height)
    return { height }
}