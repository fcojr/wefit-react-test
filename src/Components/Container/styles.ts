import styled, { css } from 'styled-components'

export const Container = styled('div')(
  () => css`
    padding: 0 10px;
    max-width: 960px;
    margin: 0 auto;
  `
)