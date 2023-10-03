import styled, { css } from 'styled-components'

export const Cart = styled('div')(
  () => css`
    display: flex;
    gap: 8px;
    align-items: center;
  `
)

export const TextWrapper = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    text-align: right;
  `
)

export const Link = styled('a')(
  () => css`
    font-size: 14px;
    font-weight: 600;
    line-height: 19px;
    cursor: pointer;

    @media(max-width: 996px) {
      display: none;
    }
  `
)

export const ItemsCount = styled('span')(
  () => css`
    font-weight: 600;
    font-size: 12px;
    color: #999999;
    line-height: 16px;
  `
)

export const Icon = styled('img')(
  () => css`
    cursor: pointer;
  `
)