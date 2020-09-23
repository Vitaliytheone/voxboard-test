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

export const TitleWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px;
    cursor: pointer;
    border-top: 1px solid rgba(34,36,38,.15);
    transition: all .3s ease;

    &:first-child {
        border-top: none;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
    }

    &:hover {
        background: #fff7f7;
        button {
            transition: all .5s ease;
            opacity: 1
        }
    }
    ${titleRadiusVariants}
`

export const Title = styled.div`
    font-weight: bold;
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
    background: rgba(234, 234, 234, 0.9);
    opacity: 0;
`

const buttonVariants = variant({
    default: 'add',
    prop: 'variant',
    variants: {
        add: css`
            padding: 2px 6px;
            opacity: 0;
            &:hover {
                background: #bdeefd;
            }
    `,
        remove: css`
            padding: 4px 12px;
            &:hover {
                background: #f14b4b6b;
            }
    `,
        create: css`
            position: absolute;
            right: 4px;
            top: 4px;
            &:hover {
                background: #efe5776b;
            }
    `,
    }
})

export const Button = styled.button`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    background: #ffff;
    ${buttonVariants};
`

export const AreaWrap = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Textarea = styled.textarea`
    width: 100%;
    height: 48px;
    margin-bottom: 6px;
    border-radius: 4px;
`