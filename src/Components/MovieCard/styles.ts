import styled, { css } from 'styled-components'
import { Button } from '../Button'

export const Card = styled('div')(
  () => css`
    background-color: #fff;
    padding: 10px 11px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 8px;
  `
)

export const CustomButton = styled(Button)(
  () => css`
    width: 100%;
  `
)

export const Img = styled('img')(
  () => css`
    max-width: 147px;
  `
)

export const Title = styled('span')(
  () => css`
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
    color: #333;
  `
)

export const Price = styled('span')(
  () => css`
    font-weight: 700;
    font-size: 16px;
    color: #2F2E41;
  `
)

export const Count = styled('div')(
  () => css`
    display: flex;
    align-items: center;
    gap: 5px;
  `
)

export const CartAddIcon = styled('img')(
  () => css`

  `
)

export const Number = styled('span')(
  () => css`
    font-weight: 400;
    font-size: 12px;
  `
)