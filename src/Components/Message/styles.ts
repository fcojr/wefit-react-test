import styled, { css } from 'styled-components'

export const MessageWrapper = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;

    @media(max-width: 991px) {
      overflow: hidden;
    }
  `
)

export const Text = styled('span')(
  () => `
    font-weight: 700;
    font-size: 20px;
    color: #2F2E41;
  `
)