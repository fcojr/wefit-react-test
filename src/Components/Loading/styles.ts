import styled, { css, keyframes } from 'styled-components'

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`

export const Loading = styled('div')(
  () => css`
    width: 48px;
    height: 48px;
    position: fixed;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    border: 5px solid #fff;
    animation: ${rotate} 2s linear infinite;

    &:before {
      content: '';
      width: 100%;
      height: 100%;
      
    }
  `
)