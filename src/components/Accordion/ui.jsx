import { variant } from '@xstyled/system';
import styled, { css } from '@xstyled/styled-components';

export const Container = styled.div`
    box-shadow: 0 1px 2px 0 rgba(34,36,38,.15), 0 0 0 1px rgba(34,36,38,.15);
    border-radius: 4px;
`

const titleRadiusVariants = variant({
    default: 'close',
    prop: 'variant',
    variants: {
        close: css`
        &:nth-last-child(2) {
            border-bottom-right-radius: 4px;
            border-bottom-left-radius: 4px;     
        }
    `,
        open: css`
            border-radius: none;
    `,
    }
})

export const Title = styled.div`
    padding: 14px;
    cursor: pointer;
    border-top: 1px solid rgba(34,36,38,.15);
    font-weight: bold;
    transition: all .3s ease;

    &:first-child {
        border-top: none;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
    }

    &:hover {
        background: #fff7f7;
    }

    ${titleRadiusVariants}
`

const contentVariants = variant({
    default: 'close',
    prop: 'variant',
    variants: {
        close: css`
            max-height: 0;
            visibility: hidden;
    `,
        open: css`
            max-height: 100vh;
            visibility: visible;
            padding-bottom: 14px;
    `,
    }
})

export const Content = styled.div`
    width: auto;
    transition: all .6s;
    overflow: hidden;
    padding: 0 16px;
    color: #350b0b;
    ${contentVariants};
`

export const ContentInfo = styled.div`
    position: relative;
    
    &:hover {
        div {
            transition: all .5s ease;
            opacity: 1
        }
    }
`

export const RemoveButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background: rgba(234, 234, 234, 0.9);
    opacity: 0;
`

export const Button = styled.button`
    cursor: pointer;
`