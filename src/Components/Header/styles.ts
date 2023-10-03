import styled, { css } from 'styled-components'

export const Header = styled('header')(
  () => css`
    padding: 18px 0;
  `
)

export const Logo = styled('h1')(
  () => css`
    font-size: 20px;
    font-weight: 700;
  `
)

export const Content = styled('div')(
  () => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `
)