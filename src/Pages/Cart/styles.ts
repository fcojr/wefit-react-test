import styled, { css } from 'styled-components'
import { Button } from '../../Components/Button'
import { Container } from '../../Components/Container'

export const CartContainer = styled(Container)(
  () => css`
    margin-top: 24px;
    background-color: #fff;
    border-radius: 4px;
    padding: 24px;

    @media(max-width: 991px) {
      margin: 0 10px;
      padding: 16px;
      display: flex;
      flex-direction: column;

      &.items {
        min-height: calc(100vh - 130px);
      }
    }
  `
)

export const CartMovieCard = styled('div')(
  () => css`
    border-bottom: 1px solid #999999;
    padding-bottom: 20px; 
    color: #2F2E41;
    display: grid;
    grid-template-columns: 5fr 2fr 3fr;
    position: relative;

    &:not(:first-child) {
      margin-top: 20px;
    }

    @media(max-width: 991px) { 
      grid-template-columns: 8fr 0fr 1fr;
      border-bottom: 0;
    }
  `
)

export const Column = styled('div')(
  () => css`    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;

    @media(max-width: 991px) {
      &.d-none {
        display: none;
      }

      &.subtotal {
        position: absolute;
        right: 0;
        bottom: 20px;
        gap: 0;
        align-items: flex-end;

      }
    }
  `
)

export const ColumnTitle = styled('span')(
  () => css`
    font-weight: 700;
    font-size: 14px;
    color: #999999;
    text-transform: uppercase;
    
    @media(max-width: 991px) {
      font-size: 12px;

      &.d-none {
        display: none;
      }
    }
  `
)

export const ProductInfo = styled('div')(
  () => css`
    display: flex;
    gap: 40px;
    align-items: center;

    @media(max-width: 991px) {
      align-items: initial;
      gap: 16px;
      width: 100%;
    }
  `
)

export const Image = styled('img')(
  () => css`
    max-width: 90px;

    @media(max-width: 991px) {
      max-width: 64px;
    }
  `
)

export const Details = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;

    @media(max-width: 991px) {
      display: grid;
      grid-template-areas: 
        "title price"
        "quantity quantity"
      ;
      width: 100%;
    }
  `
)

export const Title = styled('span')(
  () => css`
    font-weight: 700;
    font-size: 14px;
    grid-area: title;
    text-align: left;
  `
)

export const Price = styled('span')(
  () => css`
    font-weight: 700;
    font-size: 16px;
    grid-area: price;

    @media(max-width: 991px) {
      text-align: right;
    }
  `
)

export const Quantity = styled('div')(
  () => `
    display: flex;
    align-items: center;
    gap: 11px;
    margin: auto 0;

    @media(max-width: 991px) {
      display: none;

      &.mobile {
        display: flex;
        grid-area: quantity;
      }
    }
  `
)
  
export const MovieCount = styled('span')(
  () => css`
    border-radius: 4px;
    border: 1px solid #D9D9D9;
    padding: 10px;
    font-size: 14px;
    line-height: 19px;
    color: #2F2E41;
    width: 62px;
    height: 16px;

    @media(max-width: 991px) {
      padding: 5px;
    }
  `
)

export const QuantityButton = styled('div')(
  () => css`
    color: #009EDD;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-weight: 700;
    border: 2px solid #009edd;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    position: relative;

    span {
      position: absolute;
      top: 45%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    @media(max-width: 991px) {
      width: 14px;
      height: 14px;  
    }
  `
)

export const SubTotal = styled('div')(
  () => css`
    margin: auto 0;
  `
)

export const Footer = styled('div')(
  () => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 20px;

    @media(max-width: 991px) {
      flex-direction: column-reverse;
      align-items: flex-end;
      gap: 16px;
      margin-top: auto;
      border-top: 1px solid #999999;
    }
  `
)

export const FinalPrice = styled('div')(
  () => css`
    display: flex;
    align-items: center;
    gap: 15px;
  `
)

export const Total = styled('span')(
  () => css`
    font-size: 24px;
    color: #2F2E41;
    font-weight: 700;
  `
)

export const CustomButton = styled(Button) (
  () => css`
    @media(max-width: 991px) {
      width: 100%;
    }
  `
)

export const TrashIcon = styled('img') (
  () => css`
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 50%;

    @media(max-width: 991px) {
      top: 0;
    }
  `
)