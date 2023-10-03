import styled, { css } from 'styled-components'
import { ButtonProps } from '.'

export const Button = styled('button')<ButtonProps>(
  ({ type }) => css`
    padding: 8px;
    border-radius: 4px;
    background-color: ${type === 'success' ? '#039B00' : '#009EDD'};
    color: #fff;
    border: 0;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    justify-content: center;
    height: 40px;
    min-width: 180px;
  `
)